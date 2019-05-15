import React, { Component } from 'react'


class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Preetham"
      }
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Parent Component
            </div>
        )
    }
}

export default ParentComp
