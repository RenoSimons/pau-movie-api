import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

import route from './ziggy';
import { Ziggy } from './ziggy';

InertiaProgress.init()

const el = document.getElementById('app');

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})

route('show', undefined, undefined, Ziggy);
