import React, { Component } from 'react';

const Hello = () => {
    //return <h1> Hello Preetham Sridhar </h1>
    return (
        React.createElement(
            'div',
            {
                id: 'hello',
                className: 'dummyClass'
            },
            React.createElement(
                'h1',
                null,
                'Howdy Preetham Sridhar'
            )))
}

export default Hello;