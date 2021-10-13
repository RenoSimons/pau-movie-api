import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@inertiajs/inertia-react'

function ShowCard(props) {
    return (
        <>
            <li>{props.data.show.id}</li>
            <li>{props.data.show.name}</li>
            <li>{props.data.show.image.medium}</li>
            <li>{props.data.show.genres}</li>
            <Link href={route('show', {id: props.data.show.id})}>Show</Link>
        </>
    );
}

export default ShowCard;
