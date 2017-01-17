import React from "react";
import {connect} from "react-redux";


const rowStyle = {
    position: 'relative',
    top: '50px'
};

class EditUserContainer extends React.Component {

    render() {
        let currentUser = this.props.users.filter(
            (el) => {
                return el.login === this.props.params.login;
        });

        let login = '';
        if (currentUser.length === 0) {

        } else if (currentUser.length === 1) {
            login = currentUser[0].login;
        } else {

        }

        return (
            <div>

                <h1>TEST {login}</h1>

            </div>

        )
    }
}

function mapStateToProps(state) {

    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(EditUserContainer);