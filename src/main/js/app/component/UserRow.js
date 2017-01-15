import React from 'react';
import DiffInYears from 'date-fns/difference_in_years';
import {Button} from 'react-bootstrap';


export default class UserRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.user.login}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{DiffInYears(new Date(), this.props.user.birthday)}</td>
                <td>{this.props.user.role.name}</td>
                <td>Edit -
                    <Button bsStyle='success' onClick={() => onEdit(this.props.user._links.self.href)}>Delete</Button>
                    <Button bsStyle='danger' onClick={() => onDelete(this.props.user._links.self.href)}>Delete</Button>
                </td>
            </tr>
        )
    }
}

let onDelete = (key) => {
    console.log('onClick DELETE');
    console.log(key);
};

let onEdit = (key) => {
    console.log('onClick EDIT');
    console.log(key);
};