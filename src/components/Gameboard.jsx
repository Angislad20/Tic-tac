const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard(onSelectSquare, turns) {
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

            //Deriv state
        gameBoard[row][col] = player;
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((PlayerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=> onSelectSquare(rowIndex, colIndex)}>{PlayerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
    </ol>
}