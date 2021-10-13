import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@inertiajs/inertia-react'

function ShowCard(props) {
    return (
        <>
            <li>{props.data.show.image ? 
                <Link href={route('show', {id: props.data.show.id})}>
                    <img src={props.data.show.image.medium}></img>
                </Link> : ""}
            </li>
        </>
    );
}

export default ShowCard;
