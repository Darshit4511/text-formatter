import React, {useState} from 'react'

export default function TextForm(props) {
    const upClickHandle = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'Converted to UpperCase');
    }
    const lowClickHandle = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'Converted to LowerCase');
    }
    const onChangeHandle = (event)=>{
        setText(event.target.value);
    }
    const copyHandle = (event)=>{
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const clearHandle = ()=>{;
        if (window.confirm("Are you sure ?")) {
            setText('');
            props.showAlert('success', 'Text cleared');
        }
    }


    const [text , setText] = useState("Enter Text");
  return (
    <>
        <h1 style={{color : props.theme === 'light'?'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{color : props.theme === 'light'?'black' : 'white', backgroundColor: props.theme === 'light'?'white' : 'black'}} id="box" value={text} onChange={onChangeHandle} rows="7"></textarea>
        </div>
        <div className="container" >

        <button className="btn btn-primary mx-3"  onClick={upClickHandle}>Change to Uppercase</button>
        <button className="btn btn-primary mx-3"  onClick={lowClickHandle}>Change to Lowercase</button>
        <button className="btn btn-primary mx-3"  onClick={copyHandle}>Copy Text</button>
        <button className="btn btn-primary mx-3"  onClick={clearHandle}>Clear</button>
        </div>
        <div className="container my-3" style={{color : props.theme === 'light'?'black' : 'white'}}>
            <h1> Text Summary : </h1>
            {text[text.length-1]=== '' || text[text.length-1]=== ' ' || text.length===0 ?text.split(" ").length-1 : text.split(" ").length} Words and {text.length} Characters
        </div>

    </>
  )
}
