 import React , {useState} from 'react'
 
 // const [count , setCount ] = useState(0); dimag me baitha loo declare a new state variable , which we'll call 'text'
//  console.log(useState('Enter text here 2'));
 
 export default function TextForm(props) {
    const [text , setText ] = useState('Enter text here');
    // setText("Vishuuu is the new updated text");  //setText se hi change hoga value  of state 

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick=()=>{
        let lowText= text.toLowerCase();
        setText(lowText);
    }
    

   return (
    <>
    <div className="container mb-3">
        <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value ={text}></textarea>
            </div>
            <button className="btn btn-primary"  onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3"  onClick={handleLowClick}  >Convert to LowerCase</button>
    </div>
 
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>  
        {/* {text.split(" ").length} to count the number of words this will return number of arrays separated by space */}
        <p>{0.008 * text.split(" ").length} Minutes Reading Time</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>   
   )
 }
 