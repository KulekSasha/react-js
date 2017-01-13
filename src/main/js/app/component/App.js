import React from "react";
import UserList from "./UserList";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <UserList users={this.props.users}/>
        )
    }

}

function mapStateToProps(state) {

    let us = state.users || [];
    return {
        users: us
    }
}

export default connect(mapStateToProps)(App);