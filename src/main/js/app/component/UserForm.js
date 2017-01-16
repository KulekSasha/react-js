import React from "react";
import {Form, FormGroup, ControlLabel, FormControl} from "react-bootstrap";


export default class UserForm extends React.Component {

    render() {
        return (
            <Form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </Form>
        )
    }
}