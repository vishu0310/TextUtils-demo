import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
        
    // })
    
    let myStyle = {
        color: props.mode === 'dark'? 'white': '#042743',
        backgroundColor : props.mode === 'dark'? '#042743' : 'white',
        borderColor: props.mode === 'dark'? 'white': '#042743'
    }
    

    // const toggleStyle= ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white'

    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white'  
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

  return (
        <div className='container'  style={{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h1 className="my-3">About Us </h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Analyze Your text
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. be it word count , character count or reading time .
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Free To use
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a versatile text manipulation tool designed to simplify various text-related tasks, such as formatting, analyzing, and modifying text content. Whether you're a writer, student, or professional, TextUtils offers a range of features to enhance your productivity and efficiency. From word count and character count functions to text case conversion and string manipulation utilities, TextUtils empowers users to effortlessly handle text processing tasks with precision and ease. With its intuitive interface and robust functionality, TextUtils is the go-to solution for anyone seeking a reliable text tool for their everyday needs.

            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is meticulously crafted to ensure seamless compatibility across a wide range of web browsers, providing users with a consistent experience regardless of their preferred browser choice. Whether you're using Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, or any other modern web browser, TextUtils is optimized to deliver reliable performance and full functionality. Our development team diligently tests TextUtils across multiple browsers and platforms to guarantee that it operates smoothly and efficiently, allowing users to access its powerful features without encountering compatibility issues. With TextUtils, you can confidently tackle your text processing tasks knowing that you'll enjoy a seamless experience across all major web browsers.
            </div>
            </div>
        </div>
        </div> 
        {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
