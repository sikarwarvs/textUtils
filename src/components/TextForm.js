import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    if(text.length > 0){
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(': Converted to Upper Case','success');
    }
    else{
      props.showAlert(': Please Enter Text First','warning');
    }
  }
  const handleLowClick = ()=>{
    if(text.length > 0){
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(': Converted to Lower Case','success');
    }
    else{
      props.showAlert(': Please Enter Text First','warning');
    }  
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleCopy = () => {
    if(text.length > 0){
      navigator.clipboard.writeText(text);
      props.showAlert(': Text Copied to Clipboard','success');
    }
    else{
      props.showAlert(': Please Enter Text First','warning');
    }
  }
  const handleExtraSpaces = () => {
    if(text.length > 0){
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(': Extra Spaces Removed','success');
    }
    else{
      props.showAlert(': Please Enter Text First','warning');
    }
  }

  const [text, setText] = useState("");

  return (
    <div className='textForm' style={{backgroundColor: props.mode==='dark'?'#212529':'white',
    color:props.mode==='dark'?'white':'black'}}>
      <div>
          <div className="container py-3">
              <h1>{props.heading}</h1>
              <div className="my-3">
                <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myBox" rows="8"
                style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color:props.mode==='dark'?'white':'black'}}
                ></textarea>
              </div>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
      </div>
      <div className="container py-3">
        <h2>Your Text Summary</h2>
        <p> {text.length>0?text.split(" ").length:0} word(s) {text.length} character(s)</p>
        <p>{text.length>0?0.086 * text.split(" ").length:0} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview here.'}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
