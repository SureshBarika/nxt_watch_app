import NxtWatchContext from '../../context/index'

import './index.css'

const Login = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, updateMode} = value
      console.log(darkMode)
      const toggle = () => {
        updateMode()
      }
      return (
        <div>
          <button type="button" onClick={toggle}>
            upddate
          </button>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Login
