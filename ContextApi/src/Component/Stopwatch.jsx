import React, { useEffect, useState } from 'react'

export default function Stopwatch() {
    const [time ,settime]=useState(0);

    useEffect(()=>{

        const timer =setInterval(()=>settime(time+1),1000);

        return function(){
            clearInterval(timer)
        }

    },[])

  return (
    <div>
    <h1>Stop watch </h1>
    <h4>time is {time}</h4>  
    </div>
  )
}
