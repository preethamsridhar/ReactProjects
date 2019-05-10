import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';

class App extends Component {

    render() {
        return (
            <div className="App">
                <EventBind></EventBind>
            </div>
        );
    }
}

export default App;

                

//<Message />
/*<Greet name="Preetham">
                    <p>Hey How are you doing !</p>
                </Greet>
                <Greet name="Aditya">
                    <button> Reply </button>
                </Greet>
                <Greet name="Sushma">
                </Greet>
                <Welcome name="Preetham">
                   <p>Hey How are you doing !</p>
                </Welcome>
                <Welcome name="Aditya">
                   <button> Reply </button>
                </Welcome>
                <Welcome name="Sushma">
                </Welcome>
                
                <FunctionClick></FunctionClick>
                <ClassClick></ClassClick>
                */