import React from "react"
import { withRouter } from "react-router-dom"

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/profile")
    }
  }

  render() {
    const { username, password } = this.state
    
    return (
      <div className="wrapper">
        <h1>Log In</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="input-box">
            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              name="username"
              onChange={this.handleChange}
              type="text"
              value={username} />
          </div>

          <div className="input-box">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password} />
          </div>

          <button type="submit">
              Login
          </button>

        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
