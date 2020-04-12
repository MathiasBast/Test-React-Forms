import React from 'react'
import { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    const { username, password } = this.state
    const viewData = {
      username,
      password
    }
    console.log(viewData)
    event.preventDefault()
  }

  render(){
    return(
      <div className='container'>
        <form>
          <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />

            <label>Password</label>
            <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button className='button' type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form