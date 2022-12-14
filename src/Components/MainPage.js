import React from 'react'
import {useRef, useState } from 'react';

export default function MainPage(props) {

const convertUpper =() =>{
    setText(text.toUpperCase())
}
const changedText = (event) => {
    setText(event.target.value)
 }
const revertFuncion = ()  => {
    setText(text.toLowerCase())
 }
const delteFuncion = () => {
    console.log("Deleted")
    setText('')
}
function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
const [copySuccess, setCopySuccess] = useState('');
const textAreaRef = useRef(null);
const [text, setText] = useState("Enter the text here");
 return (
    <div className="container">
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea ref={textAreaRef} className="form-control" value={text} onChange={changedText} id="exampleFormControlTextarea1" rows="3"></textarea>
            <div className='col text-center'>
                <button type="button" className="btn btn-dark mt-3 col-1" onClick={convertUpper}>Convert</button>
                <button type="button" className="btn btn-dark mt-3 col-1 mx-3" onClick={revertFuncion}>Revert</button>
                <button type="button" className="btn btn-dark mt-3 col-1 " onClick={delteFuncion}>Delete</button>
                <button type="button" className="btn btn-dark mt-3 col-2 mx-2" onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
            <div className='col-12 text-center'>{copySuccess}</div>
        </div>
    </div>
  );
}
