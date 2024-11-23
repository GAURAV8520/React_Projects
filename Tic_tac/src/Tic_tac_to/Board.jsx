import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const checkTie = () => {
        return state.every(square => square !== null);
    };

    const isWinner = checkWinner();
    const isTie = !isWinner && checkTie();

    const handleClick = (index) => {
        if (state[index] !== null || isWinner || isTie) return;
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setIsXturn(!isXturn);
    };

    const clearGame = () => {
        setState(Array(9).fill(null));
        setIsXturn(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                {isWinner ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-light">
                            Player <span className={isWinner === 'X' ? 'text-blue-400' : 'text-pink-400'}>
                                {isWinner}
                            </span> wins!
                        </h2>
                        <button 
                            onClick={clearGame}
                            className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                                     transition-colors duration-300 text-sm font-medium"
                        >
                            New Game
                        </button>
                    </div>
                ) : isTie ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-light">It's a tie!</h2>
                        <button 
                            onClick={clearGame}
                            className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                                     transition-colors duration-300 text-sm font-medium"
                        >
                            New Game
                        </button>
                    </div>
                ) : (
                    <h2 className="text-xl font-light mb-8">
                        Player <span className={isXturn ? 'text-blue-400' : 'text-pink-400'}>
                            {isXturn ? 'X' : 'O'}
                        </span>'s turn
                    </h2>
                )}
            </div>

            <div className="grid grid-cols-3 gap-1 bg-gray-900 p-2 rounded-xl shadow-2xl">
                {Array(9).fill(null).map((_, index) => (
                    <Square 
                        key={index}
                        onClick={() => handleClick(index)}
                        value={state[index]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;
