import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react'
import $ from 'jquery'; 

function Season(props) {

    const seasondata = props.data;

    const { data, setData, post, processing, errors } = useForm({
        id: '',
        show_id: props.id
    })

    const saveEpisode = (e) => {
        e.preventDefault()
        post('/show/seasons/episodesave', {preserveScroll: true})
    }

    return (
        <div>
            <ul className="episode-list">
                {seasondata.episodes.map((episode, index) => {
                    return <li key={index} className="episode-list-item">
                        <p>{episode.name}</p>
                        <form onSubmit={saveEpisode}>
                            <button type="submit" className="favorite save-btn" 
                                value={data.id} 
                                id={episode.id}
                                onClick={e => {setData('id', e.target.id); $('#'+episode.id).html("Added")}}>
                                Seen
                            </button>
                        </form>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Season;
