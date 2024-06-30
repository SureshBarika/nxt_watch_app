import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

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
  LogoutPopupContainer,
  LogoutPera,
  CloseBtn,
  LogoutBtn,
  BtnsCont,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, updateMode} = value
      const toggleMode = () => {
        updateMode()
      }

      const logoutPage = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
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

            <Popup
              modal
              trigger={
                <NavBtn darkMode={darkMode}>
                  <VscThreeBars />
                </NavBtn>
              }
            >
              {close => (
                <>
                  <LogoutPopupContainer darkMode={darkMode}>
                    <LogoutPera darkMode={darkMode}>
                      Are you sure. You want Logout?
                    </LogoutPera>
                    <BtnsCont>
                      <CloseBtn
                        darkMode={darkMode}
                        type="button"
                        onClick={() => close()}
                      >
                        {' '}
                        Close{' '}
                      </CloseBtn>
                      <LogoutBtn onClick={logoutPage}>Confirm</LogoutBtn>
                    </BtnsCont>
                  </LogoutPopupContainer>
                </>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <NavBtn darkMode={darkMode}>
                  <FiLogOut />
                </NavBtn>
              }
            >
              {close => (
                <>
                  <LogoutPopupContainer darkMode={darkMode}>
                    <LogoutPera darkMode={darkMode}>
                      Are you sure. You want Logout?
                    </LogoutPera>
                    <BtnsCont>
                      <CloseBtn
                        darkMode={darkMode}
                        type="button"
                        onClick={() => close()}
                      >
                        {' '}
                        Close{' '}
                      </CloseBtn>
                      <LogoutBtn onClick={logoutPage}>Confirm</LogoutBtn>
                    </BtnsCont>
                  </LogoutPopupContainer>
                </>
              )}
            </Popup>
          </OptionsContForMBView>
        </NavBarCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
