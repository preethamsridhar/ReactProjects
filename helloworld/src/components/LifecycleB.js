import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
        console.log('Lifecycle B constructor')
        this.state = {
            name: 'Preetham'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle B getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle B shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshots) {
        console.log('Lifecycle B componentDidUpdate');
    }

    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                <h1>Lifecycle B</h1>
            </div>
        )
    }
}

export default LifecycleB
