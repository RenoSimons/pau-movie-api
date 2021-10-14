import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import InputField from '../components/Inputfield';
import ShowCard from '../components/ShowCard';

function Home(props) {
    let [userInput, setUserInput] = useState("");
    let [hasError, setHasError] = useState(false);
    let [results, setResults] = useState();
    let [hasSearched, setHasSearched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        //Make call to the api
        axios.post('http://127.0.0.1:8000/search', { userInput })
            .then(response => {
                setResults(response.data);
                setHasSearched(true);
                console.log(results)
            },
            (error) => {
                setHasError(error);
            });
    }

    return (
        <div className="container" id="homepage">
            <div className="header fc--secondary d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="m-0">Show finder</h1>
                </div>
                <div>
                    <form action="#" onSubmit={handleSubmit} className="d-flex align-items-center ml-3">
                        <InputField onInputUpdated={setUserInput} />
                        <button className="search-btn ml-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="results">
                {hasSearched ? 
                    results.length > 0 ?
                    <div>
                        <span className="fc--secondary">Search results for '{userInput}':</span>
                        <ul>
                            {results.map((result) => {
                                return (<ShowCard data={result}/>)
                            })}

                        </ul>
                    </div>
                    : <h4 className="fc--secondary">No results found...</h4>
                : ""}

                {hasError ? hasError : ""}
            </div>
            <div className="favorites mt-3">
                <h1>Your favorite episodes</h1>
                {props.favorites  ? 
                    <ul>
                        {props.favorites.map((favorite) => {
                            return <li>
                                <p>{favorite.name}</p>
                                <img src={favorite.image.medium} alt="episode image" />
                            </li>
                        })}
                    </ul>
                    : "No favorites yet"
                }
            </div>
        </div>
    );
}

export default Home;
