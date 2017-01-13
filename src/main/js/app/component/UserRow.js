import React from "react";
import DiffInYears from "date-fns/difference_in_years";


export default class UserRow extends React.Component {


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