import { useState,useCallback,useEffect,useRef } from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';

function App() {
 const [length, setLength] = useState(12)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [Password, setPassword] = useState("")

//useRef
const passwordRef = useRef(null)

 const PasswordGenerator= useCallback(() =>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


  if(numberAllowed){
    str += "0123456789"
  }

  if(charAllowed){
    str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
  }

  for(let i = 0; i <=length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

 },[length, numberAllowed, charAllowed,setPassword])

//copying clipboard passwordGenerator
const copyPasswordToClipboard = useCallback(() =>{
  window.navigator.clipboard.writeText(Password)
  toast.success("Password copied!");
},[Password])

useEffect(()=>{
  PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])
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
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-600 text-white px-3 py-0.5
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
          <label>Length : {length}</label>
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
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} />
        </div>
        <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </>
  )
}

export default App
