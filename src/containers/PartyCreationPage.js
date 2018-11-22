import React, { Component } from "react"
import ProfileMenu from "../components/ProfileMenu"


class PartyCreationPage extends Component {
  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const url = "http://localhost:8081/parties"
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        "accessToken": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push("/profile/characters"))
      .catch(err => {
        console.log("Failed to create user", err)
      })
  }

  render() {
    const { name } = this.state
    return (
      <div className="wrapper">
      
        <div className="profile-hero">
          <ProfileMenu />
        </div>
      
        <div className="inner-wrapper">
      
          <h1>Create Party</h1>

          <form onSubmit={this.handleSubmit}>

            <div className="input-box small-input">
              <label htmlFor="name">Party Name</label>
              <input
                id="name"
                name="name"
                onChange={this.handleChange}
                type="text"
                value={name} />
            </div>

            <button type="submit">
                Create
            </button>

          </form>
        
        </div>
      </div>
    )
  }

}

export default PartyCreationPage
