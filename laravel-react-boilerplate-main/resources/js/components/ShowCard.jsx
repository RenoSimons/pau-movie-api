import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@inertiajs/inertia-react'

function ShowCard(props) {
    return (
        <>
            <li>{props.data.image ? 
                <Link href={route('show', {id: props.data.id})}>
                    <img src={props.data.image.medium}></img>
                </Link> : ""}
            </li>
        </>
    );
}

export default ShowCard;
