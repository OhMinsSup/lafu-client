import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { loadableReady } from '@loadable/component';
const { NODE_ENV } = process.env;

switch(NODE_ENV) {
    case 'production':
        loadableReady(() => {
            ReactDOM.hydrate(
                <App />, 
                document.getElementById('root')
            )
        })
        break;
    case 'development':
    case 'test':
        ReactDOM.render(<App />, document.getElementById('root'));
        break;
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
