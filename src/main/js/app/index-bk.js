import react from 'react';
import reactRedux from 'react-redux';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as actions from './action/actions';
import restService from './service/RestService'

const dummyReducer = function (state, action) {
    console.log('dummy', action);
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}


let store = createStore(dummyReducer, applyMiddleware(restService, logger));


store.dispatch(actions.getUsersAction());

// class App extends react.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {users: []};
//     }
//
//     componentDidMount() {
//         client({method: 'GET', path: '/api/users'})
//             .done(response => {
//                 this.setState({users: response.entity._embedded.users});
//             });
//
//
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <UserList users={this.state.users}/>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     (<App />),
//     document.getElementById('react')
// );

