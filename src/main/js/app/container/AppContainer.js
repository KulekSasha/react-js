import React from 'react';
import App from '../component/App';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

export default class AppContainer extends React.Component {


    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}