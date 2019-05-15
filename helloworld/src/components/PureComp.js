import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure component render')
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
