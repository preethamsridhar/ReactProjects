import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor() {
        super();
    }
    clickHandler() {
        console.log("click me button clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
