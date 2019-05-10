import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, children} = this.props
        return (
            <div>
                <h1> Welcome to {name}</h1>
                <h3>{children} </h3>
            </div>
        );
    }
}

export default Welcome;