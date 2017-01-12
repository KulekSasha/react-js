'use strict';

// {
//      cards: [],
//      decks: [],
//
//  }


// tag::vars[]
// const React = require('react');
import React from 'react';
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const client = require('./client');
const Redux = require('redux');
const injectTapEventPlugin = require('react-tap-event-plugin');
// const {RaisedButton} = require('material-ui/RaisedButton');
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyRB from './component/AwesomeButton'

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


// end::vars[]

// tag::app[]
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    }

    render() {
        return (
            <EmployeeList employees={this.state.employees}/>
        )
    }
}
// end::app[]

// tag::employee-list[]
class EmployeeList extends React.Component {
    render() {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {employees}
                </tbody>
            </table>
        )
    }
}
// end::employee-list[]

// tag::employee[]
class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}
// end::employee[]


class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h2>HELLZZZOOOO!</h2>
                    <RaisedButton label='Default' onMouseDown={()=> {console.log("aa")}}/>
                    <MyRB/>
                </div>
            </MuiThemeProvider>
        )
    }


}


// tag::render[]
ReactDOM.render(
    // <App />,

    (
        <Router history={browserHistory}>
            <Route path='/' component={App}/>
            <Route path='my' component={App2}/>
        </Router>
    )

    , document.getElementById('react')
)
// end::render[]

