import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@inertiajs/inertia-react'
import { useForm } from '@inertiajs/inertia-react'

function Season(props) {

    const data = props.data;

    const saveEpisode = (e) => {
        console.log(e.target.id)
    }

    return (
        <div>
            <ul className="episode-list">
                {data.episodes.map((episode, index) => {
                    return <li key={index} className="episode-list-item">
                        <p>{episode.name}</p>
                        <p className="favorite save-btn" id={episode.id} onClick={saveEpisode}>Save</p>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Season;
