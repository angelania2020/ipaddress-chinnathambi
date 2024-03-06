import React, { Component } from "react";
import "./IPAddress.css";

class IPAddress extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>Maybe that's your IP address! :&#41;</p>
            </div>
        );
    }
}

export default IPAddress;