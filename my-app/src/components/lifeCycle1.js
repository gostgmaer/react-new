import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';


class lifeCycle1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sarkar"
        }
        console.log('LifeCycl1  Constructor');
    }

    changeState = () => {
        this.setState({
            name: 'Sarkar'
        })
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle1 getDriveStateFromProps');
        return null
    }
    shouldComponentUpdate(prevProps, prevState) {
        console.log('LifeCycle1 shouldComponentUpdate');
        return true
    }
    componentDidUpdate() {
        console.log('LifeCycle1 componentDidUpdate');

    }

    // componentDidMount(){
    //     console.log('lifecycle1 componentDidMount');
    // }
    getSnapshotBeforeUpdate() {
        console.log('lifecycle1 getSnapshotBeforeUpdate');
        return null

    }
    render() {
        console.log("LifeCycle1 render");
        return (
            <div>
                lifeCycle1
                <div> <LifeCycleB /></div>
                <button onClick={this.changeState} >onChange</button>

            </div>
        )
    }
}

export default lifeCycle1