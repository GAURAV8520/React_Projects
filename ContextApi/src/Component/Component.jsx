import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'

function Component() {
    const {count,Setcount} =useContext(Context);
    function Decrement(){
      if(count!==0){
        Setcount(count-1);
      }
    }

  return (
    <div>
        <button onClick={()=>Setcount(count+1)}>Increment</button>
        <button onClick={()=>Decrement()}> Decrement</button>
      
    </div>
  )
}

export default Component
