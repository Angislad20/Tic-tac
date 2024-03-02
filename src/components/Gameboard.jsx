import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard(onSelectSquare, activePlayerSymbol) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard)=> {
            const updateGameBoard = [...previousGameBoard.map(innerArray => [... innerArray])];
            updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateGameBoard;
        })

        onSelectSquare();
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((PlayerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{PlayerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
    </ol>
}