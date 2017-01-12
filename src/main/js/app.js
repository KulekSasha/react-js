'use strict';
// {
//      cards: [],
//      decks: [],
//
//  }
// tag::vars[]
import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import DiffInYears from "date-fns/difference_in_years";

const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const client = require('./client');
const Redux = require('redux');
const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
            return state.concat([newCard]);

        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));

Redux.StoreCreator


store.subscribe(() => {
    console.log(store.getState())
});

const AppCard = (props) => {
    return (
        <div className='app-card'>

            <RaisedButton label='Primary'/>
        </div>
    );
};

const Sidebar = React.createClass({
    render(){
        let props = this.props;

        return (<div>
            <h2>all decks</h2>
        </div>);
    }
});


class UserRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.login}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{DiffInYears(new Date(), this.props.user.birthday)}</td>
                <td>{this.props.user.role.name}</td>
                <td>Edit - Delete</td>
            </tr>
        )
    }
}

class UserList extends React.Component {
    render() {
        let listUsers = this.props.users.map(user =>
            <UserRow key={user._links.self.href} user={user}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Login</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                {listUsers}
                </tbody>
            </table>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users'})
            .done(response => {
                this.setState({users: response.entity._embedded.users});
            });


        client()
    }


    render() {
        return (
            <div>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path='/' component={App}/>
        <Route path='my' component={App}/>
    </Router>)
    , document.getElementById('react')
);

