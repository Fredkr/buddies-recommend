import ReactDOMServer from 'react-dom/server';
import React from 'react';
import StartApp from '../components/start/start.react';
import Register from '../components/account/register.react';
import Login from '../components/account/login.react';

export function home(req, res) {
    var markup = ReactDOMServer.renderToString(<StartApp />);
    res.render('react-component', {
        markup: markup
    });
}

export function accountRegistration(req, res) {
    var markup = ReactDOMServer.renderToString(<Login />);
    res.render('react-component', {
        layout: 'accountlayout',
        markup: markup
    });
}

export function accountLogin(req, res) {
    var markup = ReactDOMServer.renderToString(<Register />);
    res.render('react-component', {
        layout: 'accountlayout',
        markup: markup
    });
}
