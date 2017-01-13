import React from "react";
import UserRow from "./UserRow";



export default class UserList extends React.Component {

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