import {createStore, applyMiddleware, compose} from "redux";
import reducers from "../reducer/AllReducers";
import restService from "../service/RestService";

import {createDevTools} from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";
import React from "react";

export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
)


// const store = createStore(reducers, {}, applyMiddleware(restService));
const store = createStore(reducers, compose(applyMiddleware(restService), DevTools.instrument() ));

export default store;