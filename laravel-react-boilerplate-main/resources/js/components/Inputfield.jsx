import React from 'react';
import ReactDOM from 'react-dom';

function InputField(props) {

    const inputChange = (e) => {
        // Lift the state up on change
        props.onInputUpdated(e.target.value);
    };

    return (
        <div>
            <label>Search</label>
            <input onChange={inputChange} autoComplete="off" type="text" placeholder="Enter a show"/>
        </div>
    );
}

export default InputField;
