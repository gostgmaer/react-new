import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"Sarkar"
        }
        console.log('LifeCycleB  Constructor');
      }
      static getDerivedStateFromProps(props, state){
          console.log('LifeCycleB getDriveStateFromProps');
          return null
      }
      shouldComponentUpdate(prevProps, prevState){
        console.log('LifeCycleB shouldComponentUpdate');
        return true
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');

    }

    // componentDidMount(){
    //     console.log('lifecycle1 componentDidMount');
    // }
    getSnapshotBeforeUpdate(){
        console.log('lifecycleB getSnapshotBeforeUpdate');
        return null

    }
  
    //   componentDidMount(){
    //       console.log('LifeCycleB componentDidMount');
    //   }
  render() {
    console.log("LifeCycleB render");
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB