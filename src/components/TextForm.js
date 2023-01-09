import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("your uppercase text is: "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UPPERCASE", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowercase", "success");

    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleVowelCountClick = () => {
        let vowelCount = 0;
        // iterate through each character in the text
        for (let i = 0; i < text.length; i++) {
            // check if character is a vowel (a, e, i, o, or u)
            if (text[i].toLowerCase() === 'a' || text[i].toLowerCase() === 'e' || text[i].toLowerCase() === 'i' || text[i].toLowerCase() === 'o' || text[i].toLowerCase() === 'u') {
                vowelCount++;
            }
        }
        setVowelCount(vowelCount);
        props.showAlert(" Vowels counted", "success");
    }

    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copied to Clipboard", "success");
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Removed extra spaces", "success");

    }

    const[text,setText]=useState("");
    const[vowelCount, setVowelCount] = useState(0);

    return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor:props.mode==="dark"?"#5A5A5A":"lightgrey", color:props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 my-1" onClick={handleLoClick}> Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVowelCountClick}>Count Vowels</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Out Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <p>{vowelCount} vowels</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
