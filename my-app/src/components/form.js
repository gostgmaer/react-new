import React, { Component } from 'react'

 class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         commentss:""
      }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            userName:event.target.value
        })

    }
    handleCommentChange = (event) =>{
        this.setState({
            commentss:event.target.value
        })
    }


  render() {
    return (
        <div>
        <div className="form-group">
          <label>UserName</label>
          <input onChange={this.handleUsernameChange} type="text"
            className="form-control" name="username" value={this.state.userName} id="username" aria-describedby="helpId" placeholder="UserName"/>
          
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea className="form-control" rows="3" value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
    </div>
    )
  }
}

export default form