'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const client = require('./client');
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
        // this.state = {employees: []};
    }

    // componentDidMount() {
    //     client({method: 'GET', path: '/api/employees'}).done(response => {
    //         this.setState({employees: response.entity._embedded.employees});
    //     });
    // }

    render() {
        return (
            <h2>HELLZZZOOOO!</h2>
        )
    }
}

class RootComp extends React.Component{

    constructor(prop) {
        super(prop);

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

