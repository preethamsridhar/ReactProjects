import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        console.log('Lifecycle A constructor')
        this.state = {
            name: 'Preetham'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshots) {
        console.log('Lifecycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Sridhar'
        })
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB></LifecycleB> 2
            </div>
        )
    }
}

export default LifecycleA
