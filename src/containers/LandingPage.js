import React, { Component } from "react"
import "./LandingPage.scss"

class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="landing-page-hero">
          <h1>Don't Split the Party</h1>
        </div>
       
        <div className="inner-wrapper">
          <p>Connect with your party</p>
        </div>  
      </div>
    )
  }
}

export default LandingPage
