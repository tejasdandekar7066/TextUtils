
import React, {useState}from 'react'
export default function Textform(props) {

  const handelUpclick =()=> {
    console.log("Upper case was clicked")
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase","success")
  }
  const handelloclick =()=> {
    console.log("Upper case was clicked")
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lowercase","success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("text is now converted to voice","success")
  }
  const handleonChange=(event)=> {
    console.log("on click");
    setText(event.target.value);
  }
    const [text, setText] = useState("Enter your text here")

    // text = "new text"wrong way
    // setText("new text") //correct way
    
    return (
      <>
        <div className='container'style={{color: props.mode==="dark"?"white":"black"}}>
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text}  onChange ={handleonChange}  style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>

        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpclick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handelloclick} >Convert To Lowerase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>hi your text summary</h1>
      <p>{text.split(" ").length} words,  {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Privew</h2>
      <p>{text.length>0?text:"enter something in box to preview it here"}</p>
    </div>
      </>
  )
}
