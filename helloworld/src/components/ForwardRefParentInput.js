import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

export class ForwardRefParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleClick = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputRef}></ForwardRefInput>
                <button onClick={this.handleClick}> Forward Ref </button>
            </div>
        )
    }
}
 
export default ForwardRefParentInput
