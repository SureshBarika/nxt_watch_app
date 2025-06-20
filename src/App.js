import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import NxtWatchContext from './context/index'
import Login from './components/login'
import Home from './components/Home'
import ProtectedRoute from './components/ProctedRoute'

import './App.css'

/* const menuBar = [
  {
    id: 'HOME',
    displayText: 'Home',
    icon: 'IoHomeSharp',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    icon: 'HiFire',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    icon: 'IoGameController',
  },
  {
    id: 'SAVED',
    displayText: 'Saved videos',
    icon: 'BiListPlus',
  },
] */

// Replace your code here
class App extends Component {
  state = {
    darkMode: false,
    activeMenu: '',
    premiumPopUp: true,
  }

  toggleMenu = id => {
    this.setState({activeMenu: id})
  }

  toggleMode = () => {
    this.setState(prvState => ({
      darkMode: !prvState.darkMode,
    }))
  }

  togglePremiumPopUp = () => {
    this.setState(prvState => ({
      premiumPopUp: !prvState.premiumPopUp,
    }))
  }

  render() {
    const {darkMode, activeMenu, premiumPopUp} = this.state
    document.title = 'NXT Watch App'

    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          activeMenu,
          premiumPopUp,
          updateMode: this.toggleMode,
          updateActiveMenu: this.toggleMenu,
          updatePremiumPopUp: this.togglePremiumPopUp,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
