import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/index'

import {
  LoginMainContainer,
  LoginCard,
  LoginBtn,
  LoginForm,
  LoginLogoImg,
  Label,
  InputElement,
  ErrorMsg,
} from './styledComponents'

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
          const {darkMode} = value

          const logoUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer darkMode={darkMode}>
              <LoginCard darkMode={darkMode}>
                <LoginLogoImg src={logoUrl} alt="logo" />
                <LoginForm onSubmit={this.submitUser}>
                  <Label darkMode={darkMode} htmlFor="username">
                    USERNAME
                  </Label>
                  <br />
                  <InputElement
                    darkMode={darkMode}
                    id="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={this.updateUsername}
                    required
                  />
                  <Label darkMode={darkMode} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputElement
                    darkMode={darkMode}
                    id="password"
                    type={inputType}
                    placeholder="Password"
                    value={password}
                    onChange={this.updatePassword}
                    required
                  />
                  <input
                    onChange={this.updatePasswordType}
                    value={showPassword}
                    type="checkbox"
                    id="showPass"
                  />
                  <Label darkMode={darkMode} htmlFor="showPass">
                    Show password
                  </Label>
                  <LoginBtn type="submit"> Login</LoginBtn>
                  {loginStatus && (
                    <ErrorMsg className="err-msg">
                      *Username and Password didn`t match
                    </ErrorMsg>
                  )}
                </LoginForm>
              </LoginCard>
            </LoginMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
