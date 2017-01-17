import React from "react";
import {connect} from "react-redux";

const rowStyle = {
    position: 'relative',
    top: '50px'
};

class AppContainer extends React.Component {
    render() {
        return (
            <div style={rowStyle}>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    let stateN = state || {};
    return {
        state: stateN
    }
}

export default connect(mapStateToProps)(AppContainer);