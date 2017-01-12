import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const MyRaisedButton = () => (
    <div>
        <RaisedButton label="Default"/>
        <RaisedButton label="Primary" primary={true}/>
        <RaisedButton label="Secondary" secondary={true}/>
    </div>
);

export default MyRaisedButton;