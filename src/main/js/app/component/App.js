import React from "react";
import UserList from "./UserList";
import {connect} from "react-redux";


export default class App extends React.Component {
    render() {
        return (
            <UserList users={this.props.users}/>
        )
    }

}

// function mapStateToProps(state) {
//
//     let users = state.users || [];
//     return {
//         users: users
//     }
// }
//
// export default connect(mapStateToProps)(App);