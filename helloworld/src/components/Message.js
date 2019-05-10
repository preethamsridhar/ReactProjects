import React, { Component } from 'react';
import Welcome from './Welcome';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor',
            buttonName: 'Subscribe'
        };
    }

    changeMessage() {
        if (this.state.message == "Welcome Visitor") {
            this.setState({
                message: "Thank you for subscribing",
                buttonName: "Subscibed"
            });
        }
        else {
            this.setState({
                message: "Welcome Visitor",
                buttonName: "Subscribe"
            });
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}> {this.state.buttonName}</button>
            </div>
        );
    }
}

export default Message;