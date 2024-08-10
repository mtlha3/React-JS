import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const clickOnUpBtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been capitalized!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const clickOnLowBtn = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Your text has been converted to lower case!", "success");
    };

    const clearText = () => {
        let newText2 = "";
        setText(newText2);
        props.showAlert("Text box is clear", "success");
    };

    const extraSpace = () => {
        let newText2 = text.trim().replace(/\s+/g, ' ');
        setText(newText2);
        props.showAlert("Extra spaces removed successfully", "success");
    };

    return (
        <>
            <div className='container'>
                <h1 className='my-3 font-black' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#2c2c2c' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary m-3" onClick={clickOnUpBtn} disabled={text.trim() === ''}>Convert to UPPERCASE</button>
                <button className="btn btn-primary m-3" onClick={clickOnLowBtn} disabled={text.trim() === ''}>Convert to lowercase</button>
                <button className="btn btn-primary m-3" onClick={clearText} disabled={text.trim() === ''}>Clear Text</button>
                <button className="btn btn-primary m-3" onClick={extraSpace} disabled={text.trim() === ''}>Remove Extra Space</button>
            </div>

            <div className="container">
                <h1 className='my-2 font-black' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text Summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    Words: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} , Characters: {text.length}
                </p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    Time to read the text you write: {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes
                </p>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
