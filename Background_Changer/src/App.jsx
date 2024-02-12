import { useState } from "react"

function App() {
  const [color, setColor] = useState("red")

  return (

    <div className="w-full h-screen mr-4 rounded "
    style={{backgroundColor : color}}
    > 
      <div className="fixed flex flex-wrap justify-around bottom-12 rounded bg-slate-50 inset-x-5 gap-5">

          <button className="px-6 py-4 m-2 rounded  bg-red-400" onClick={()=>setColor("red")}
          
          >Red</button>

          <button className="px-6 py-4 m-2 rounded  bg-green-400" onClick={()=>setColor("green")}
          
          >Green</button>
          <button className="px-6 py-4 m-2 rounded  bg-white-40" onClick={()=>setColor("white")}
          
          >white</button>

          <button className="px-6 py-4 m-2 rounded  bg-blue-400" onClick={()=>setColor("blue")}
          
          >Blue</button>

<button className="px-6 py-4 m-2 rounded  bg-pink-300" onClick={()=>setColor("pink")}
          
          >Pink</button>

<button className="px-6 py-4 m-2 rounded  bg-yellow-400" onClick={()=>setColor("yellow")}
          
          >Yellow</button>

          <button className="px-6 py-4 m-2 rounded  bg-black text-white" onClick={()=>setColor("black")}
          
          >Black</button>


      </div>
    </div>
    
  )
}

export default App
