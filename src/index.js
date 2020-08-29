/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
import { loadCentres } from './actions/centres-actions';
import { loadActivities } from './actions/api-activities-actions';
import './styles/styles.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';
// import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCentres());
store.dispatch(loadActivities());
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
