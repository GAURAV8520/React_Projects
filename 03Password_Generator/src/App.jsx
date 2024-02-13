import { useState,useCallback, useEffect } from 'react'

import './App.css'

function App() {
    const [length,setlength]=useState(8);
    
    const [NumberAllowed,setAllowed]=useState(false);
    const [SpecialCharacterAllowed,setCharacterAllowed] = useState(false);

    const [password,setPassword]=useState("");

    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (NumberAllowed) str += "0123456789"
      if (SpecialCharacterAllowed) str += "!@#$%^&*-_+=[]{}~`"
  
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
      }
  
      setPassword(pass)
  
          
          setPassword(pass)
    },[length,NumberAllowed,SpecialCharacterAllowed,setPassword])


    useEffect(()=>{
      passwordGenerator()
    },[length,NumberAllowed,SpecialCharacterAllowed,passwordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shodow-md rounded-lg px-4 py-3 my-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>

            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className='flex shodow rounded-lg overflow-hidden mb-4'>
                  
                  <input type="text"
                   value={password}
                   className='outline-none w-full py-1 px-3'
                   placeholder='Password'
                   />

                   

            </div>

            <div className='flex text-sm gap-x-2'>
              <div className='fles items-center gap-x-1'>
                <input type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer' 
                onChange={(e)=>{setlength(e.target.value)}}
                />

                <label>length:{length}</label>
              
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={NumberAllowed}
                id='numberInput'
                onChange={() => {
                  setAllowed((prev) => !prev);
              }}
                />

                <label htmlFor="numberInput">Numbers</label> 
              </div>

              <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={SpecialCharacterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

        
            </div>
          
        </div>

      
    </>
  )
}

export default App
