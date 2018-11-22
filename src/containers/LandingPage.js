import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.scss"

class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="landing-page-hero">
          <h1 className="landing-page-header"><span className="text-padding">Don't Split the Party</span></h1>
        </div>
       
        <div className="inner-wrapper">
        
          <div className="intro-container">
          
            <div className="intro-character">
              <Link to="/characters">
                <img src="./images/landing-page-1.jpg" />
                <h2>Create your character</h2>
              </Link>          
            </div>
            <div className="intro-right">
              <img src="./images/landing-page-2.jpg" /> 
            </div>
            <div className="intro-left">
              <img src="./images/landing-page-3.jpg" /> 
            </div>
            <div className="intro-party">
              <Link to="/parties">
                <img src="./images/landing-page-4.jpg" /> 
                <h2>Connect with your party</h2>
              </Link>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default LandingPage
