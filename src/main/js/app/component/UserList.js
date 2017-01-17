import React from "react";
import UserRow from "./UserRow";
import Table from "react-bootstrap/lib/Table";


export default class UserList extends React.Component {

    render() {
        let path = this.props.path;
        let listUsers = this.props.users.map(user =>
            <UserRow key={user._links.self.href} user={user} path={path}/>
        );
        return (
            <Table responsive bordered>
                <thead>
                <tr>
                    <th>Login</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listUsers}
                </tbody>
            </Table>
        )
    }
}