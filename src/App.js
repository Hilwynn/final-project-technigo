import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.scss"
import PrivateRoute from "./PrivateRoute"
import LandingPage from "./containers/LandingPage"
import Header from "./containers/Header"
import Footer from "./containers/Footer"
import UserCharacterPage from "./containers/UserCharacterPage"
import CharacterPage from "./containers/CharacterPage"
import LoginPage from "./containers/LoginPage"
import RegistrationPage from "./containers/RegistrationPage"
import ProfilePage from "./containers/ProfilePage"
import CharacterCreationPage from "./containers/CharacterCreationPage"
import UserCharactersPage from "./containers/UserCharactersPage"
import CharacterDirectoryPage from "./containers/CharacterDirectoryPage"
import PartyDirectoryPage from "./containers/PartyDirectoryPage"
import PartyCreationPage from "./containers/PartyCreationPage"
import PartyPage from "./containers/PartyPage"


class App extends Component {
  state = {
      newUser: {},
      userCredentials: {},
      authorized: false
    }
  
  postRegistrationData = () => {
    const url = "http://localhost:8081/users"
    const { newUser } = this.state
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        this.setState({
          authorized: true
        }, () => this.props.history.push("/login"))
      })
      .catch(err => {
        console.log("Failed to create user", err)
      })
  }
  
  registerUser = newUser => {
    this.setState({
      newUser
    }, () => { this.postRegistrationData() })
  }
  
  postUserCredentials = () => {
    const url = "http://localhost:8081/sessions"
    const { userCredentials } = this.state
    fetch(url, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.token && json.userId) {
          localStorage.setItem("token", json.token)
          localStorage.setItem("userId", json.userId)
          this.setState({
            userCredentials: {},
            authorized: true
          }, () => this.props.history.push("/"))
        }
      })
      .catch(err => {
        console.log("Login failed", err)
      })
  }
  
  loginUser = userCredentials => {
    this.setState({
      userCredentials
    }, () => { this.postUserCredentials() })
  }

  logOutUser = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    this.props.history.push("/")
    this.setState({
      authorized: false
    })
  }

  checkIfAuthorized = () => {
    if (localStorage.getItem("token")) {
      this.setState({
        authorized: true
      })
    }
  }
  
  componentDidMount() {
    this.checkIfAuthorized()
  }  
  
  render() {
    const { authorized } = this.state
    
    return (
      <div>
        <Header
          authorized={authorized}
          logOutUser={this.logOutUser} />
        <Switch>
        
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage
                authorized={authorized} />
            )
            } />
            
          <Route
            path="/register"
            render={() => (
              <RegistrationPage
                registerUser={this.registerUser} />
            )
            } />
            
          <Route
            path="/login"
            render={() => (
              <LoginPage
                loginUser={this.loginUser}
                authorized={authorized} />
            )
            } />
            
          <Route
            path="/characters" exact
            component={CharacterDirectoryPage} />
            
          <Route
            path="/characters/:id" exact
            component={CharacterPage} />
            
          <Route
            path="/parties" exact
            component={PartyDirectoryPage} />
            
          <Route
            path="/parties/:id"
            component={PartyPage} />
            
          <PrivateRoute path="/profile/characters/create" exact component={CharacterCreationPage} />
              
          <PrivateRoute
            path="/profile/characters/:id" exact
            component={UserCharacterPage} />
            
          <PrivateRoute path="/profile" exact component={ProfilePage} />
          
          <PrivateRoute path="/profile/characters" exact component={UserCharactersPage} />
          
          <PrivateRoute path="/profile/parties/create" component={PartyCreationPage} />
          
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
