import React, { Component } from 'react'
import ChildComponet from './childComponet'


 class parentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greedParent = this.greedParent.bind(this)
    }
    greedParent(childName){
        alert(`Hellow ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponet greethandler={this.greedParent} />
      </div>
    )
  }
}

export default parentComponent