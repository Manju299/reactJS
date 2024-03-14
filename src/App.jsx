import { useState } from 'react'
import './App.css'
// import About from './components/About'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Alert from './components/Alert';

function App() {
  
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message ,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000
    )

  }
    
  

  const toggle = ()=>{
    if(mode=="light"){
    setMode("dark");
    document.body.style.backgroundColor = "#2c2e2f";
    document.body.style.color = "white";
    showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success")
    }
  }


  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <Form formname="Enter you text" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      

    
    </>
  )
}

export default App
