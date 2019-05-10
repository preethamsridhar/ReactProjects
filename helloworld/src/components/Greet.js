import React from 'react';

const Greet = ({name, children}) => {
    return (
        <div>
            <h1> Hello {name} </h1>
            <h2>{children}</h2>
        </div>
    );
}

export default Greet;