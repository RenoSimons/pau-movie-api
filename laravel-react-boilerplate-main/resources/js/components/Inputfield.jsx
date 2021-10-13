import React from 'react';
import ReactDOM from 'react-dom';

function InputField(props) {

    const inputChange = (e) => {
        // Lift the state up on change
        props.onInputUpdated(e.target.value);
    };

    return (
        <div>
            <input onChange={inputChange} className="search-input" autoComplete="off" type="text" placeholder="Enter a show" required/>
        </div>
    );
}

export default InputField;
