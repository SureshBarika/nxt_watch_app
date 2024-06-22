import NxtWatchContext from '../../context'

import {NavBarCont, LogoImg} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, updateMode} = value
      const logoUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBarCont>
          <LogoImg src={logoUrl} alt="logo" />
        </NavBarCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
