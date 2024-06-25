import {Link} from 'react'
import {IoMoon} from 'react-icons/io5'
import {VscThreeBars} from 'react-icons/vsc'
import {FiLogOut, FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context'

import {
  NavBarCont,
  LogoImg,
  OptionsContForMBView,
  NavBtn,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, updateMode} = value
      const toggleMode = () => {
        updateMode()
      }
      const logoUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBarCont darkMode={darkMode}>
          <LogoImg src={logoUrl} alt="nxt watch logo" />
          <OptionsContForMBView>
            <NavBtn darkMode={darkMode} onClick={toggleMode}>
              {darkMode ? <FiSun /> : <IoMoon />}
            </NavBtn>
            <NavBtn darkMode={darkMode}>
              <VscThreeBars />
            </NavBtn>
            <NavBtn darkMode={darkMode}>
              <FiLogOut />
            </NavBtn>
          </OptionsContForMBView>
        </NavBarCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
