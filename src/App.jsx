import { useState } from 'react'
import './App.css'
// import About from './components/About'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {
  const [mode,setMode] = useState("light");

  const toggle = ()=>{
    if(mode=="light"){
    setMode("dark");
    document.body.style.backgroundColor = "#2c2e2f";
    document.body.style.color = "white";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }


  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggle={toggle}/>
      <Form formname="Enter you text" mode={mode}/>
      {/* <About/> */}

    
    </>
  )
}

export default App
