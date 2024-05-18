import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText]  = useState("");
    // setText("new text "); // corrent way to change the state
 

    const handleUpClick= ()=>{
        // console.log("Uppercase was Click"+text);
        let newUppertext=text.toUpperCase();
        setText(newUppertext);
        props.showAlart(" : Convert to UpperCase Successfully.","success");
    }
    const handleLowerClick= ()=>{
        let newLowertext=text.toLowerCase();
        setText(newLowertext);
        props.showAlart(" : Convert to LowerCase Successfully.","success");
    }
        const handleOnChange= (event)=>{
            // console.log("On Change");
            setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color : props.mode === 'light' ? 'black' :'white'}} >
        <label htmlFor="myBox" className="form-label"><h1>{props.heading }</h1></label>
        
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light' ? 'white' :'#042743', color : props.mode === 'light' ? 'black' :'white'}} id="myBox" rows="12"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>

    </div>
    <div className='container my-3' style={{color : props.mode === 'light' ? 'black' :'white'}}  >
        <h1>Your text Summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Take{0.008*text.split(" ").length} mininute to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text : "Write any text to previwe here...."}</p>
    </div>
    </>
  )
}