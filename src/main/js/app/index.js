import React from "react";
import {render} from "react-dom";
import App from "./component/App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import restService from "./service/RestService";
import AppContainer from "./container/AppContainer";


const dummyReducer = function (state, action) {

    console.log(action.type);

    switch (action.type) {
        case 'GET_USERS_RECEIVED':
            return Object.assign({}, state, {
                users: action.data
            });
            break;
        default:
            return state || {users: []};
    }
};

let store = createStore(dummyReducer, {}, applyMiddleware(restService));

store.dispatch({type: 'GET_USERS'});

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('react')
);



