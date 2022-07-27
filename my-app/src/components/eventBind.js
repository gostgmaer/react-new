import React, { Component } from 'react'

class eventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Helow'

        
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })

    //     console.log(this);

    // }
    clickHandler=()=>{
        this.setState({
            message:'goodBye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button className='btn' onClick={()=>this.clickHandler()}>Click Me</button> */}
                <button className='btn' onClick={this.clickHandler}>Click Me</button>
                {/* <button className='btn' onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                
                </div>
        )
    }
}

export default eventBind