import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import NxtWatchContext from './context/index'
import Login from './components/login'
import Home from './components/Home'
import ProtectedRoute from './components/ProctedRoute'

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
    document.title = 'NXT Watch App'

    return (
      <NxtWatchContext.Provider value={{darkMode, updateMode: this.toggleMode}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
