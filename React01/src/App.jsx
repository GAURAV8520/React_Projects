import { useState } from 'react'

import './App.css'

function App() {

  let count=15;
  
  let [counter , setcount]=useState(count)

  //let counter=15

  const add=()=>{
    if(counter!=20)
    setcount(counter+1)
    // console.log(counter) 
  }

  const sub=()=>{
    if(counter!=0)
    setcount(counter-1)
  }
 

  return (
    <>


      <h1>counter project</h1>
      <h2>{counter}</h2>

      <button onClick={add}>Add in {counter}</button>
      <br />

      <button onClick={sub}>subtract in {counter}</button>

      


    </>
  )
}

export default App
