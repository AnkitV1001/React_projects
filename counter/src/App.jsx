import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

let [count,setCount]=useState(10)

const addValue=()=>{
  if(count<=19){
    setCount(count+1)
  // setCount((prevCounter)=> prevCounter+1)
  // setCount((prevCounter)=> prevCounter+1)
  // setCount((prevCounter)=> prevCounter+1)
  // setCount((prevCounter)=> prevCounter+1)
}

}
const removeValue=()=>{
  if(count>0){
 setCount(count-1)
  }
}
  return (
    <>

     <h1>Ankit Counter</h1>
     <h2>Counter Value : {count}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
