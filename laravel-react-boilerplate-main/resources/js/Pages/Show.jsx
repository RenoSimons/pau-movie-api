import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Season from "../components/Season";
import { Link } from '@inertiajs/inertia-react'

function Show(props) {

    const data = props.showData;
    const seasons = props.episodeData;

    return (
        <div className="container" id="homepage">
            <div className="header fc--secondary d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="m-0">Show details</h1>
                </div>
                <div>
                    <Link className="search-btn ml-3" href={route('index')}>Back</Link>
                </div>
            </div>
            <div className="showCard">
                <div className="d-md-flex">
                    <div className="col-md-4">
                        {data.image ? <img className="mt-3" src={data.image.medium}></img> : ""}
                    </div>
                    <div className="col-md-4">
                        <h2>{data.name}</h2>
                        <p>Language: {data.language}</p>
                        <p className="mt-3">Premiered: {data.premiered}</p>
                        <p className="mt-3">Ended: {data.ended}</p>
                        <p className="mt-3">Genres: {data.genres.map((genre) => <span> {genre}</span>)}</p>
                        <p className="mt-3">Rating: {data.rating.average}</p>
                    </div>
                    <div className="col-md-4">
                        <p>{data.summary}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="fc--secondary p-4">Seasons and episodes</h1>
                <div className="d-flex flex-wrap">
                    {seasons.map((season, index) => {
                        return (<div className="col-md-4">
                            <h4>Season {index + 1}</h4>
                            <Season data={season} key={season.id}/>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Show;