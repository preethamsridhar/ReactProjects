import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Preetham</div>
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Preetham</div>
        // ):(
        //     <div>Welcome Guest</div>
        // )

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h1>Welcome Preetham </h1>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h1>Welcome Guest </h1>
        //         </div>
        //     )
        // }

    }
}

export default UserGreeting

