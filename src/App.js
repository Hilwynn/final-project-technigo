import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.scss"
import LandingPage from "./containers/LandingPage.js"

class App extends Component {
  render() {
    return (
      <div>
        Header
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage />
            )
            } />
        </Switch>
      </div>
    )
  }
}

export default App
