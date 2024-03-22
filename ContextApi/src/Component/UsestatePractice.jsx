import React, { useState } from 'react'

export default function UsestatePractice() {
    const [count ,setCount]=useState(0);
    const [value,setValue]=useState(' is even');
    
    function val(){
        
        if(count%2==0){
            setValue('value is even')
        }else{
            setValue('is odd')
        }
    }
    
    return (
    <div>
        <h1>count is : {count}</h1>
        <h1>value is : {value}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={val}>Checkvalue</button>
    </div>
  )
}
