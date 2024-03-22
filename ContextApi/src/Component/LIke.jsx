import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'

function LIke() {

  const {count,Setcount}=useContext(Context);  
  return (
    <div>
        
        <button onClick={()=>Setcount(count+2)}>Increment by 2 </button>
      
    </div>
  )
}

export default LIke
