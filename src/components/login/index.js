import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/index'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    loginStatus: false,
  }

  updatePasswordType = () => {
    this.setState(prvState => ({
      showPassword: !prvState.showPassword,
    }))
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  submitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitError = () => {
    this.setState({
      loginStatus: true,
    })
  }

  submitUser = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const Responses = await fetch(url, options)
    const data = await Responses.json()
    if (Responses.ok === true) {
      this.submitSuccess(data)
    } else {
      this.submitError()
    }
  }

  render() {
    const {showPassword, username, password, loginStatus} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, updateMode} = value
          const toggle = () => {
            updateMode()
          }

          const mainContBg = darkMode ? 'main-dark-bg' : ''

          const cardBg = darkMode ? 'card-dark-bg' : 'card-light-bg'

          const logoUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const inputModeType = darkMode ? 'login-input-dark' : ''

          const labelClass = darkMode ? 'label-dark' : 'label-light'

          return (
            <div className={`${mainContBg} login-main-cont`}>
              <div className={`${cardBg} login-card`}>
                <img className="login-logo-img" src={logoUrl} alt="logo" />
                <form className="login-form" onSubmit={this.submitUser}>
                  <label className={labelClass} htmlFor="username">
                    USERNAME
                  </label>
                  <br />
                  <input
                    className={`${inputModeType} login-input-light`}
                    id="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={this.updateUsername}
                    required
                  />
                  <br />
                  <label className={labelClass} htmlFor="password">
                    PASSWORD
                  </label>
                  <br />
                  <input
                    className={`${inputModeType} login-input-light`}
                    id="password"
                    type={inputType}
                    placeholder="Password"
                    value={password}
                    onChange={this.updatePassword}
                    required
                  />
                  <br />
                  <input
                    onChange={this.updatePasswordType}
                    value={showPassword}
                    type="checkbox"
                    id="showPass"
                  />
                  <label className={labelClass} htmlFor="showPass">
                    Show password
                  </label>
                  <br />
                  <button type="submit" className="login-btn">
                    {' '}
                    Login
                  </button>
                  {loginStatus && (
                    <p className="err-msg">
                      *Username and Password didn`t match
                    </p>
                  )}
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
