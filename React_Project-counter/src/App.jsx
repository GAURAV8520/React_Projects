
import './App.css'
import { useState } from 'react'

function App() {
  
  const [count,setCount]=useState(0);

  function onClick(){
    setCount(count+1);
  }

  return (   

    <div>
      <button onClick={onClick}>counter {count} </button>
    </div>
  )
}

export default App
