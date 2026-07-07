import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App(){
  //let counter=16
  let [counter,setcounter]=useState(16)


  function Add_number(){
    //counter=counter+1
    //console.log("number added",counter)
    if(counter<20){
      setcounter(counter+1)
    }
   
    
  }

  function subtract_number(){
    if(counter>0){
    setcounter(counter-1)
  }
}

  return(
    <>
    <h1>Counter Project</h1>
    <h2>count No : {counter}</h2>
    <button onClick={Add_number}>Add number: {counter}</button>
    <br/>
    <button onClick={subtract_number}>Subtract Number : {counter}</button>

    </>
  )
}

export default App
