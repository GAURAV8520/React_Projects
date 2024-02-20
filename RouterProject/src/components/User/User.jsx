import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='flex center justify-center align-middle bg-green-200 text-red-700 m-5 pt-5 text-xl text-center'>User: {userid}</div>
  )
}

export default User
