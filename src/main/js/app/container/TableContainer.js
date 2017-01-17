import React from "react";
import UserList from "../component/UserList";
import {connect} from "react-redux";
// Bootstrap
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";


const rowStyle = {
    position: 'relative',
    top: '50px'
};

class TableContainer extends React.Component {
    render() {
        let path = this.props.location.pathname;
        return (
            <Grid fluid={true}>
                <Row className="show-grid" style={rowStyle}>
                    <Col xs={12} md={6} xsOffset={0}>
                        <UserList users={this.props.users} path={path}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    let users = state.users || [];
    return {
        users: users
    }
}

export default connect(mapStateToProps)(TableContainer);