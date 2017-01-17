import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store, {DevTools} from "./store/Store";
import TableContainer from "./container/TableContainer";
import EditUserContainer from "./container/EditUserContainer";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import AppContainer from "./container/AppContainer";

const historySync = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={historySync}>
                <Route path="/app" component={AppContainer}>
                    <IndexRoute component={TableContainer}/>
                    <Route path="users/:login" component={EditUserContainer}/>
                </Route>

            </Router>
            <DevTools/>
        </div>
    </Provider>

    , document.getElementById('react')
);

store.dispatch({type: 'GET_USERS'});
