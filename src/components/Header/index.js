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
  BarBtn,
  ProfileImg,
  LogoutIcon,
  LogoutPopupContainer,
  LogoutPera,
  CloseBtn,
  LogoutBtnClick,
  LogoutBtn,
  BtnsCont,
  SideBarForMBView,
  SidebarCloseBtn,
  NavCont,
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
        <NavCont darkMode={darkMode}>
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
                  <BarBtn darkMode={darkMode}>
                    <VscThreeBars />
                  </BarBtn>
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
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <div>
                    <LogoutIcon darkMode={darkMode}>
                      <FiLogOut />
                    </LogoutIcon>
                    <LogoutBtnClick type="button" darkMode={darkMode}>
                      Logout
                    </LogoutBtnClick>
                  </div>
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
        </NavCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
