import React from 'react';
import ReactDOM from 'react-dom';

function Show(props) {
    return (
        <div className="container">
            <h1>Show page</h1>
            <p>{console.log(props)}</p>
        </div>
    );
}

export default Show;