import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    // New function to check for tie
    const checkTie = () => {
        return state.every(square => square !== null);
    };

    const isWinner = checkWinner();
    const isTie = !isWinner && checkTie();

    const handleClick = (index) => {
        if (state[index] !== null || isWinner || isTie) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setIsXturn(!isXturn);
    };

    const clearGame = () => {
        setState(Array(9).fill(null));
        setIsXturn(true);
    };

    const renderGameStatus = () => {
        if (isWinner) {
            return (
                <>
                    {isWinner} won the game!
                    <div>
                        <button 
                            onClick={clearGame} 
                            className="mt-3 p-2 border-solid border-4 border-clan-200 hover:bg-gray-100"
                        >
                            Play again
                        </button>
                    </div>
                </>
            );
        } else if (isTie) {
            return (
                <>
                    Game ended in a tie!
                    <div>
                        <button 
                            onClick={clearGame} 
                            className="mt-3 p-2 border-solid border-4 border-clan-200 hover:bg-gray-100"
                        >
                            Play again
                        </button>
                    </div>
                </>
            );
        } else {
            return <h1 className="mb-5">Player {isXturn ? "X" : "O"} please move</h1>;
        }
    };

    return (
        <div className="board-container m-32">
            {renderGameStatus()}
            
            {!isWinner && !isTie && (
                <>
                    <div className="flex justify-evenly items-center">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="flex justify-evenly items-center">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="flex justify-evenly items-center">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Board;
