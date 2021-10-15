import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Season from "../components/Season";
import { Link, useForm } from '@inertiajs/inertia-react'
import $ from 'jquery'; 

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

    useEffect(() => {
        stringToHtml($('#summary').attr('value'))
    });

    const stringToHtml = (string) => {
        $('#summary').html(string);
    }

    return (
        <div className="container" id="homepage">
            <div className="header light-card fc--secondary d-flex align-items-center justify-content-between">
                <div>
                    <h3 className="m-0">Show details</h3>
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
                        <h2 className="light-card">{showdata.name}</h2>
                        <p>Language: {showdata.language}</p>
                        <p className="mt-3">Premiered: {showdata.premiered}</p>
                        <p className="mt-3">Ended: {showdata.ended ? showdata.ended : "Not ended yet"}</p>
                        <p className="mt-3">Genres: {showdata.genres.map((genre) => <span> {genre}</span>)}</p>
                        <p className="mt-3">Rating: {showdata.rating.average}</p>
                    </div>
                    <div className="col-md-4">
                        <span id="summary" value={showdata.summary}></span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="fc--secondary light-card">Seen episodes for {showdata.name}</h3>
                <div className="d-flex flex-wrap">
                    {props.seenEpisodes ? props.seenEpisodes.map((episode, index) => {
                        return (<div className="col-md-4"><p>{episode.name}</p></div>)
                    }) : <p>No episodes seen yet</p>}
                </div>
            </div>
            <div>
                <h3 className="fc--secondary light-card">Seasons and episodes</h3>
                <div className="d-flex flex-wrap">
                    {seasons.map((season, index) => {
                        return (<div className="col-md-4">
                            <h4 className="fc--lightdark">Season {index + 1}</h4>
                            <Season data={season} key={season.id} id={showdata.id} />
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Show;