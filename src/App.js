import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.scss"
import LandingPage from "./containers/LandingPage.js"
import Header from "./containers/Header.js"
import CharacterPage from "./containers/CharacterPage.js"
import CharacterSheet from "./components/CharacterSheet.js"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage />
            )
            } />
            <Route
              path="/character"
              render={() => (
                <CharacterPage />
              )
              } />
        </Switch>
      </div>
    )
  }
}

export default App
