import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {IoMoon, IoClose} from 'react-icons/io5'
import {VscThreeBars} from 'react-icons/vsc'
import {FiLogOut, FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context'

import MenuBar from '../NavigationBar'

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
  SideBarForMBView,
  SidebarCloseBtn,
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

      const overlayStyles = {
        backgroundColor: darkMode ? '#080808' : '#ffffff',
        width: '100vw',
      }

      const logoUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBarCont darkMode={darkMode}>
          <Link to="/">
            <LogoImg src={logoUrl} alt="nxt watch logo" />
          </Link>
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
              overlayStyle={overlayStyles}
            >
              {close => (
                <>
                  <SideBarForMBView darkMode={darkMode}>
                    <SidebarCloseBtn
                      darkMode={darkMode}
                      type="button"
                      onClick={() => close()}
                    >
                      {' '}
                      <IoClose />{' '}
                    </SidebarCloseBtn>
                    <MenuBar closePopUp={() => close()} />
                  </SideBarForMBView>
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
