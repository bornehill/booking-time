import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import LoginPage from '../components/login/LoginPage';
import LeisureCentreSchedulePage from '../components/leisure-centre/LeisureCentreSchedulePage';
//eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="schedule/:id" component={LeisureCentreSchedulePage}/>
        <Route path="login" component={LoginPage}/>
    </Route>
);
