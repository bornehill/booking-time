/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';
import { loadCentres } from './actions/centres-actions';

const store = configureStore();
store.dispatch(loadCentres());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
