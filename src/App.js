// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState("light"); //Weather dark mode is enabled or not.
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      showAlert(': Light mode on', 'success');
    }
    else{
      setMode("dark");
      showAlert(': Dark mode on', 'success');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
