import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


import './index.css';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </Router>
    </Provider>
    , document.getElementById('root'));
