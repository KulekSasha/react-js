import React from "react";
import DiffInYears from "date-fns/difference_in_years";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import store from "../store/Store";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import Link from "react-router/lib/Link";

export default class UserRow extends React.Component {

    render() {
        let user = this.props.user;
        return (
            <tr>
                <td>{user.login}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{DiffInYears(new Date(), user.birthday)}</td>
                <td>{user.role.name}</td>
                <td>
                    <ButtonToolbar>
                        <LinkContainer to={{pathname: '/users/' + user.login}}>
                            <Button bsStyle='success' bsSize='xsmall' >
                                Edit
                            </Button>
                        </LinkContainer>
                        <Button bsStyle='danger' bsSize='xsmall'
                                onClick={() => onDelete(user._links.self.href)}>
                            Delete
                        </Button>
                    </ButtonToolbar>
                    <Link to='/users/aaa'>LINK</Link>
                </td>
            </tr>
        )
    }
}

let onDelete = (key) => {
    store.dispatch({type: 'DELETE_USER', link: key});
};
