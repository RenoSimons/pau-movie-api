import React, { useState, useEffect } from 'react';
import axios from "axios";

import InputField from '../components/Inputfield';
import ShowCard from '../components/ShowCard';

function Home(props) {
    let [userInput, setUserInput] = useState("");
    let [filterInput, setFilterInput] = useState("");
    let [hasError, setHasError] = useState(false);
    let [results, setResults] = useState([]);
    let [favorites, setFavorites] = useState(props.favorites);

    useEffect(() => {
        // On type get the results
        axios.post('/search', { userInput })
        .then(response => {
            setResults(response.data);
         },
        (error) => {
            setHasError(error);
        });

    }, [userInput]);

    // Filter
    if (filterInput.length > 0) {
        favorites = [];
        props.favorites.map((favorite) => { 
            if( favorite.name.toLowerCase().includes(filterInput.toLowerCase()) ) {
                favorites.push(favorite);
            }
        })
    }

    return (
        <div className="container" id="homepage">
            <div className="header fc--secondary light-card d-md-flex align-items-center justify-content-between">
                <div>
                    <h3 className="m-0">Show finder</h3>
                </div>
                <div>
                    <form action="#" className="d-flex align-items-center ml-md-3 mt-2 mt-md-0">
                        <InputField onInputUpdated={setUserInput} placeholder="Search for show"/>
                        <button className="search-btn ml-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="results" className="my-3">
                    {results.length > 0 ?
                        <div>
                            <span>Search results for '{userInput}':</span>
                            <ul>
                                {results.map((result) => {
                                    return (<ShowCard data={result.show} />)
                                })}

                            </ul>
                        </div>
                        : <h4 className="fc--secondary my-5 pl-3">No results found...</h4>
                    }
                {hasError ? hasError : ""}
            </div>
            <div className="favorites mt-3">
                <div className="d-md-flex align-items-center justify-content-between light-card">
                    <h3 className='mb-2 mb-md-0'>Your favorite shows</h3>
                    <InputField onInputUpdated={setFilterInput} placeholder="Filter favorites"/>
                </div>
                
                {favorites ?
                    <ul className="mt-3">
                        {favorites.map((favorite) => {
                            return (<ShowCard data={favorite} />)
                        })}
                    </ul>
                    : <span className="my-5">No favorites yet</span> 
                }
            </div>
        </div>
    );
}

export default Home;
