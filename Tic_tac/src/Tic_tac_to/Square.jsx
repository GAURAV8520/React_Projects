import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} className='h-36 w-full flex justify-center items-center border-solid border-8 border-clan-500 rounded'>
        <h5 className='text-yellow-200  text-3xl font-bold'>{props.value}</h5>
      
    </div>
  )
}

export default Square
