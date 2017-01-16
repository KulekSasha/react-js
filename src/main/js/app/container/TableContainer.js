import React from "react";
import UserTable from "../component/UserList";
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
        return (
            <Grid fluid={true}>
                <Row className="show-grid" style={rowStyle}>
                    <Col xs={12} md={8} xsOffset={2}>
                        <UserTable users={this.props.users}/>
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