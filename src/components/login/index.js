import {Component} from 'react'

import NxtWatchContext from '../../context/index'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, updateMode} = value
          console.log(darkMode)
          const toggle = () => {
            updateMode()
          }

          const mainContBg = darkMode ? 'main-dark-bg' : ''

          const cardBg = darkMode ? 'card-dark-bg' : 'card-light-bg'

          const logoUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <div className={`${mainContBg} login-main-cont`}>
              <div className={`${cardBg} login-card`}>
                <img className="login-logo-img" src={logoUrl} alt="logo" />
                <button type="button" onClick={toggle}>
                  update
                </button>
                <form className="login-form" onSubmit={this.submitUser}>
                  <label htmlFor="username">USERNAME</label>
                  <br />
                  <input id="username" placeholder="Username" />
                  <br />
                  <label htmlFor="password">PASSWORD</label>
                  <br />
                  <input id="password" placeholder="Password" />
                  <br />
                  <input type="checkbox" id="showPass" />
                  <label htmlFor="showPass">Show password</label>
                </form>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
