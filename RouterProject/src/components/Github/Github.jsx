import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data =useLoaderData();
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/GAURAV8520')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center bg-green-400 text-white p-5 text-2xl'>Github Followers :{data.followers}</div>
    //<img src={data.avatar_url} alt="github picture" width={300}/>
  )
}

export default Github

export const githubInfoLoader =async ()=>{
   const res= await fetch('https://api.github.com/users/hiteshchoudhary')
   return res.json();
}
