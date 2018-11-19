import React, { Component } from "react"

class RegistrationPage extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.registerUser(this.state)
  }

  render() {
    const { username, email, password } = this.state
    return (
      <div className="wrapper">
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              onChange={this.handleChange}
              type="text"
              value={username} />
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              onChange={this.handleChange}
              type="email"
              value={email} />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password} />
          </div>

          <button type="submit">
              Register
          </button>

        </form>
      </div>
    )
  }

}

export default RegistrationPage
