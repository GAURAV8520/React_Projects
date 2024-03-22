import { useEffect, useState } from "react"
import { getRandomUser } from "./Api/Api"
import UserCard from "./Components/UserCard";

function App() {

  const[userdata , setData]=useState(null)


  useEffect(()=>{
    getRandomUser().then((user)=>setData(user.results[0]));
  },[])


  const Refresh=()=>{
    getRandomUser().then((user)=>setData(user.results[0]));
  }

  

  
  return (
    <>
    {userdata && <UserCard  data={userdata}/>}
    <div onClick={Refresh} className="flex items-center justify-center mt-44"><button>Refresh</button></div>
      
    </>
  )
}

export default App
