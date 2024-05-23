import {Route, Redirect, Switch} from 'react-router-dom'

import {Component} from 'react'

import NxtWatchContext from './context/index'
import Login from './components/login'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkMode: false,
  }

  toggleMode = () => {
    this.setState(prvState => ({
      darkMode: !prvState.darkMode,
    }))
  }

  render() {
    const {darkMode} = this.state

    return (
      <NxtWatchContext.Provider value={{darkMode, updateMode: this.toggleMode}}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
