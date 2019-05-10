import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment () {
        // this.setState({
        //     count : this.state.count + 1 
        // },
        // () => {
        //     console.log('Call back value: ', this.state.count);
        // })

        this.setState((prevSt, props) =>({
            count : prevSt.count + parseInt(props.addValue)
        }))
    }

    incrementThree() {
        this.increment();
        this.increment();
        this.increment();
        
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <div><h1>Count - {this.state.count}</h1></div>
                <button onClick={()=>this.incrementThree()}> INC </button>
            </div>
        )
    }
}

export default Counter;
