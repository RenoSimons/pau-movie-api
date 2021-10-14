import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Season from "../components/Season";
import { Link, useForm } from '@inertiajs/inertia-react'

function Show(props) {

    const showdata = props.showData;
    const seasons = props.episodeData;

    const { data, setData, post, processing, errors } = useForm({
        id: '',
    })

    const saveShow = (e) => {
        e.preventDefault()
        post('/show/seasons/showsave')
    }

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
                        {showdata.image ? <img className="mt-3" src={showdata.image.medium}></img> : ""}
                        <form onSubmit={saveShow}>
                            <button type="submit" className="search-btn mt-3"
                                value={data.id}
                                id={showdata.id}
                                onClick={e => setData('id', e.target.id)}>
                                Save show to favorites
                            </button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>{showdata.name}</h2>
                        <p>Language: {showdata.language}</p>
                        <p className="mt-3">Premiered: {showdata.premiered}</p>
                        <p className="mt-3">Ended: {showdata.ended}</p>
                        <p className="mt-3">Genres: {showdata.genres.map((genre) => <span> {genre}</span>)}</p>
                        <p className="mt-3">Rating: {showdata.rating.average}</p>
                    </div>
                    <div className="col-md-4">
                        <p>{showdata.summary}</p>
                    </div>
                </div>
            </div>
            <div>
                {console.log(props.seenEpisodes)}
                <h1 className="fc--secondary py-4 ">Seen episodes for {showdata.name}</h1>
                <div className="d-flex flex-wrap">
                    {props.seenEpisodes ? props.seenEpisodes.map((episode, index) => {
                        return (<div className="col-md-4"><p>{episode.name}</p></div>)
                    }) : <p>No episodes seen yet</p>}
                </div>
            </div>
            <div>
                <h1 className="fc--secondary py-4">Seasons and episodes</h1>
                <div className="d-flex flex-wrap">
                    {seasons.map((season, index) => {
                        return (<div className="col-md-4">
                            <h4>Season {index + 1}</h4>
                            <Season data={season} key={season.id} id={showdata.id}/>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Show;