import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store/Store";
import {DevTools} from "./store/Store";
import TableContainer from "./container/TableContainer";
import EditUserContainer from "./container/EditUserContainer";

import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch({type: 'GET_USERS'});

render(
    <Provider store={store}>
        <div>
        <Router history={history}>
            <Route path="/" component={TableContainer}/>
            <Route path="/users/:login" component={EditUserContainer}/>
            <Route path="/users/aaa" component={EditUserContainer}/>
        </Router>
        <DevTools/>
        </div>
    </Provider>,
    document.getElementById('react')
);



