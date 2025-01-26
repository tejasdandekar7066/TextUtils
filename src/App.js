// it's no javascript it's not htmlk it's jsx
import { useState } from 'react';
import './App.css';
// import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/Alert';
// import About from './components/about';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";

// let name1 ="tejas";
function App() {
  const [mode, setmode] = useState('dark')
  const [alert, setAlert] = useState(null)

   const showAlert =( message, type)=>{
    setAlert({
      msg: message,
      type: type

   })
   setTimeout(() => {
    setAlert(null)
    
   }, 1500);

   }
  const togglemode =()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor ="white";
      showAlert("light mode is on","success");
      document.title= "Textutils - light mode on"
      
    }
    else{
      setmode("dark");
      document.body.style.backgroundColor ="#2e405c";
      showAlert("dark mode is activated","success");
      document.title= "Textutils - dark mode on"
     
    }

  }
  
  return (
    <>
 {/* <Navbar/> */}
 {/* <Navbar  title = "MY-FIRST-REACT-APP"  />  */}


    {/* <Router> */}
 <Navbar  title = "MY-FIRST-REACT-APP"  aboutText = 'About us'  mode={mode} togglemode={togglemode}  /> 
 
 <Alert  alert ={alert}/>
 <div className="container  my-3">
 
  <Textform heading="Enter text to analyze below" showAlert={showAlert} mode={mode} />
  {/* <About/> */}
        {/* <Routes> */}
          {/* <Route  exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform heading="Enter text to analyze below" showAlert={showAlert} mode={mode} />} />
           </Routes> */}
 </div>
{/* </Router> */}
    </>



  );
}

export default App;
