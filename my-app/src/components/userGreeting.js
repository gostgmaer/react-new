import React, { Component } from 'react'

class userGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: true
        }
    }


    render() {
        // if (this.state.isLogedIn) {
        //     return (
        //         <div>
        //              <div>Welcome Sarkar</div>

        //         </div>

        //     )

        // } else {
        //     return (
        //         <div>
        //              <div>Welcome Guest</div>
        //         </div>

        //     )

        // }
        // return (
        //     <div>
        //          <div>Welcome Sarkar</div>
        //          <div>Welcome Guest</div>
        //     </div>

        // )
        // let message
        // if (this.state.isLogedIn) {
        //     message=<div>Welcome Sarkar</div>

        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // return (
        //     this.state.isLogedIn ?
        //         <div>Welcome Sarkar</div> :
        //         <div>Welcome Guest</div>
        // )
       return this.state.isLogedIn && <div>Welcome Sarkar</div>
    }
}

export default userGreeting