import React from "react";
import {connect} from "react-redux";
// Bootstrap
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";


const rowStyle = {
    position: 'relative',
    top: '50px'
};

class EditUserContainer extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row style={rowStyle}>
                    <Col xs={12} md={8} xsOffset={2}>
                        <h1>TEST</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {

    let aaa = state.AAA || '';

    return {
        AAA: aaa
    }
}

export default connect(mapStateToProps)(EditUserContainer);