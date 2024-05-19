
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import Alart from './componets/Alart';
import About from './componets/About';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alart, setAlart] = useState(null)
  
  
  const showAlart=(message,type)=> {
    setAlart({
        msg : message,
        type : type
      })
        setTimeout(() => {
          setAlart(null);
        },1500);
  }
  
  const switchToMode =()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlart(" : Dark mode has been enable.","success")
      // setInterval(() => {
      //   document.title = "SurVatic is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install SurVatic"
      // }, 1500);   
    }
    else{
      setMode("light");     
      document.body.style.backgroundColor = "white";
      showAlart(" : Light mode has been enable.","success")
      // document.title = "SurVatic - Light Mode"     
    }
  }  
  return (
    <>
    
      <Router>

        <Navbar Title="SurVatic" aboutText = "About" mode ={mode} switchToMode={switchToMode} />
        <Alart alart= {alart} />
        <div className="container  my-3"> 
        <Routes>
            <Route exact path="/About" element={<About />}/>
            
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlart={showAlart}/>}/>
            
          </Routes>
        </div>
   
      </Router>
    </>
  );
}

export default App;

