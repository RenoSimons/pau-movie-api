import React from 'react';

function InputField(props) {

    const inputChange = (e) => {
        // Lift the state up on change
        props.onInputUpdated(e.target.value);
    };

    return (
        <div>
            <input onChange={inputChange} className="search-input" autoComplete="off" type="text" placeholder={props.placeholder} required/>
        </div>
    );
}

export default InputField;
