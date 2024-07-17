import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event)=> {
        // console.log("on change");
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
        // console.log("button was Clicked!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
        
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleLoClick = ()=> {
        // console.log("button was Clicked!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
        
    }

    const handleCapitalClick = ()=> {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
    }

    const handleToggleClick = ()=> {
        let newText = text.split('').map(char => {
            if(char === char.toUpperCase()){
                return char.toLowerCase();
            } else{
                return char.toUpperCase();
            }
        }).join(' ');
        setText(newText);
    }

    const handleCopy = ()=> {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text got copied!", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces!", "success");
    }
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ? 'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'grey':'white', color : props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitaltize Each Word</button>
        <button className="btn btn-primary mx-2" onClick={handleToggleClick}>Toggle Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white':'#042743'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p> {text.length>0 ? text : "Enter something in the above box to preview it."} </p>
    </div>
    </>
  );
}
