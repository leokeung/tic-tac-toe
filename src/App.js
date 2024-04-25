import "./App.css";
import { useEffect, useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function winnerCheck(squares) {
  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCases.length; i++) {
    const [x, y, z] = winCases[i];
    if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
      return squares[x];
    }
  }
  return null;
}

function Board() {
  const [xRound, setxRound] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  useEffect(() => {
    console.log("All start"); //Fetch data
  }, []);

  function handleClick(index) {
    const newSquares = squares.slice();
    if (squares[index] || winnerCheck(squares)) {
      return;
    }
    if (xRound) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }
    setSquares(newSquares);
    setxRound(!xRound);
  }

  const winner = winnerCheck(squares);
  let message;
  if (winner) {
    message = `Winner is ${winner} 👍👍👍`;
  } else {
    message = `Next turn is ${xRound ? "X" : "O"}😒`;
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <p>{message}</p>
    </>
  );
}
export default Board;
