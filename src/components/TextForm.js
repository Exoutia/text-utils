import React, {useState}  from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("this is handle on upppercase click"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("this is handle on lowercase click"+text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleInverseClick = () => {
    console.log("this is handle on lowercase click"+text);
    let newText = text.split("").reverse().join("");
    setText(newText);
  }
  const handleClearClick = () => {
    console.log("This has cleared the text box");
    let newText = '';
    setText(newText);
  }


  const handleOnChange = (event) => {
    console.log("this hdnale on change");
    setText(event.target.value); // this is the only way to change the value.
  }

  const handleCopyOnChange = () => {
    console.log("I am copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraWhiteSpace = () => {
    console.log("remove extra spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div style={{color: props.mode==="primary" ? "black" : "white"}}>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== "primary" ? "White" : "#464646", color: props.mode==="primary" ? "black" : "white"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleInverseClick} >Convert to Inverse </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopyOnChange}>copy</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraWhiteSpace}>remove extra spaces</button>

    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <p> {0.008 * text.split(" ").length} min to read the text.</p>
      <h2>Preview</h2>
      <p>{text} </p>
    </div>
    </div>
    </>
  )
}
