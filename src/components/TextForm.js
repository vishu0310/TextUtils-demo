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
        props.showAlert("Converted to UpperCase!", "success");

    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick=()=>{
        let lowText= text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    
    const handleClearClick = ()=>{ 
        let newText= "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
        // var text = document.getElementById('myBox');
        // text.select();
        // document.getSelection().removeAllRanges(); //selected text haat jaega
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces have been handled", "success");
    }

   return (
    <>
    <div className="container mb-3  " style={{color: props.mode === 'dark' ? 'white': '#042743 '}}>
        <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value ={text} style={{backgroundColor: props.mode === 'dark' ? '#13466e': 'white' , color: props.mode === 'dark' ? 'white': '#042743'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2"  onClick={handleUpClick} style={{border:'2px solid grey'}}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2"  onClick={handleLowClick}  style={{border:'2px solid grey'}}>Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2"  onClick={handleClearClick}  style={{border:'2px solid grey'}}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2"  onClick={handleCopy} style={{border:'2px solid grey'}} >Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2"  onClick={handleExtraSpaces} style={{border:'2px solid grey'}}  > Remove Extra Spaces</button>
             

    </div>
 
    <div className="container my-3 " style={{color: props.mode === 'dark' ? 'white': '#042743 '}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>  
        {/* {text.split(" ").length} to count the number of words this will return number of arrays separated by space */}
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Reading Time</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in Text box above to preview it here"}</p>
    </div>
    </>   
   )
 }
 