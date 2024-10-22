import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

switch ( process.env.NODE_ENV) {
  case 'production':
    loadableReady(() => {
      ReactDOM.hydrate(<Root />, document.getElementById('root'));
    });
    break;
  case 'development':
  case 'test':
    ReactDOM.render(<Root />, document.getElementById('root'));
    break;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
