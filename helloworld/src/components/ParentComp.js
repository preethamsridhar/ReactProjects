import React, { PureComponent } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';


class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Preetham"
      }
    }
    
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Preetham'
            })
        }, 2000)
    }

    render() {
        console.log('Parent component render')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
