import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Inertia } from '@inertiajs/inertia'

import InputField from '../components/Inputfield';

function Home() {
    let [userInput, setUserInput] = useState("");
    let [hasError, setHasError] = useState(false);
    let [results, setResults] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        //Make call to the api
        axios.post('http://127.0.0.1:8000/search', { userInput })
            .then(response => {
                setResults(response.data);
                console.log(results)
            },
            (error) => {
                console.log(error)
                setHasError(error);
                });
    }

    return (
        <div className="container">
            <h1>Home</h1>

            <h1>Search</h1>

            <form action="#" onSubmit={handleSubmit}>
                <InputField onInputUpdated={setUserInput} />
                <button type="submit">Search</button>
            </form>

            <div className="results">
                {results ?
                    <div>
                        <ul>
                            {results.map((result) => {
                                return (<li key={result.id}><span>{result.score}</span></li>)
                            })}

                        </ul>
                    </div>
                    : <span>No results</span>
                }

          
            </div>
        </div>
    );
}

export default Home;
