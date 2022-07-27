import React, { Component } from 'react'

class form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      commentss: "",
      Topic: "react"
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value
    })

  }
  handleCommentChange = (event) => {
    this.setState({
      commentss: event.target.value
    })
  }
  handleTopicChange = (event) => {
    this.setState({
      Topic: event.target.value
    })
  }
  handleSubmit = event=>{
    alert(`${this.state.userName},${this.state.commentss},${this.state.Topic}`)
    event.preventDefault()
  }


  render() {
    const {userName,commentss,Topic}=this.state
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <div >
            <label>UserName</label>
            <input onChange={this.handleUsernameChange} type="text"
              className="form-control" name="username" value={userName} id="username" aria-describedby="helpId" placeholder="UserName" />

          </div>
          <div >
            <label>Comment</label>
            <textarea className="form-control" rows="3" value={commentss} onChange={this.handleCommentChange}></textarea>
          </div>
          <div >
            <label >Select</label>
            <select value={Topic} name="" id="" onChange={this.handleTopicChange}>
              <option value="react">Option 1</option>
              <option value="angular">Option 2</option>
              <option value="vue"> Option 3</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default form