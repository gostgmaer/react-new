import React, { Component } from 'react'


class counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.state.count = this.state.count + 1
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log(this.state.count) })
        this.setState(prevState =>({
            count:prevState.count + 1
        }))
        

    }
    incFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrement() {
        if (this.state.count != 0) {
            this.setState({
                count: this.state.count - 1
            }, () => { console.log(this.state.count) })
            // console.log(this.state.count);

        }

    }



    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={() => this.increment()} >Increment</button>
                <button onClick={() => this.decrement()} >Decrement</button>
            </div>


        )
    }
}

export default counter