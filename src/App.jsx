import { useState,useCallback } from 'react'


function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [Password, setPassword] = useState("")

 const PasswordGenerator= useCallback(() =>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


  if(numberAllowed){
    str += "0123456789"
  }

  if(charAllowed){
    str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
  }

  for(let i = 0; i <=Array.length; i++){
    let cahr = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)
  }
  setPassword(pass)

 },[length, numberAllowed, charAllowed,setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 text-orange-700 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type='text'
        value={Password}
        className='outline-none w-full bg-white py-1 px-3'
        placeholder='Password'
        readOnly
      />
      <button className='outline-none bg-blue-600 text-white px-3 py-0.5
      shrink-0 cursor-pointer'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length of Password : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">

          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
