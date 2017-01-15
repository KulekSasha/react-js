import React from 'react';
import App from '../component/App';
import {connect} from "react-redux";



class AppContainer extends React.Component {
    render() {
        return (
                <App users={this.props.users}/>
        )
    }
}

function mapStateToProps(state) {

    let users = state.users || [];
    return {
        users: users
    }
}

export default connect(mapStateToProps)(AppContainer);