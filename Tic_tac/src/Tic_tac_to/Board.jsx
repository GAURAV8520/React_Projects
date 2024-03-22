import React, { useState } from 'react'
import Square from './Square'

function Board() {

    const [state , setState]=useState(Array(9).fill(null));

    const [isXturn ,SetIsXturn]=useState(true);

    const CheckWinner=()=>{
      const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]


      ];

      for(let logic of winnerLogic){
        const [a,b,c]=logic;
        if( state[a]!==null && state[a]===state[b] && state[b]===state[c]){
          
        return state[a];
        }
      }
      return false;

    }
    const isWinner = CheckWinner();
    
    const handelClick=(index)=>{

      if(state[index]!==null){
        return ;
      }

      const copyState=[...state];

      copyState[index]=isXturn?"X":"O";
      setState(copyState);
      SetIsXturn(!isXturn);



    };

    const clearGame =()=>{
      setState(Array(9).fill(null))
    }
  
    


  return (
    <div className='board-container m-32'>
          {isWinner?
          <>{isWinner} won the game 
          <div>
            <button onClick={()=>clearGame()} className='mt-3 p-2 border-solid border-4 border-clan-200 '>Play again </button>
            
          </div>
          </>
          :
          <>
          <h1 className='mb-5'>Player {isXturn?"X":"O"} please move</h1>
        
        <div className='flex justify-evenly items-center'>
        <Square onClick={()=>handelClick(0)} value={state[0]}/>
        <Square onClick={()=>handelClick(1)} value={state[1]}/>
        <Square onClick={()=>handelClick(2)} value={state[2]}/>
        </div>
        <div className="flex justify-evenly items-center">
        <Square onClick={()=>handelClick(3)} value={state[3]}/>
        <Square onClick={()=>handelClick(4)} value={state[4]}/>
        <Square onClick={()=>handelClick(5)} value={state[5]}/>
        </div>
        <div className="flex justify-evenly items-center">
        <Square onClick={()=>handelClick(6)} value={state[6]}/>
        <Square onClick={()=>handelClick(7)} value={state[7]}/>
        <Square onClick={()=>handelClick(8)} value={state[8]}/>
        </div>

        </>
        }
    </div>
  )
}

export default Board;