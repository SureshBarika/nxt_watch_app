import {Component} from 'react'
import {IoClose} from 'react-icons/io5'

import NxtWatchContext from '../../context'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeMainContainer,
  PremiumCont,
  PremiumSmlCont,
  PremiumImg,
  SidebarCloseBtn,
  PremiumPera,
  GetPremiumBtn,
  DividerCont,
  HomeOffCont,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, premiumPopUp, updatePremiumPopUp} = value
          const updatePremiumCont = () => {
            updatePremiumPopUp()
          }
          return (
            <HomeMainContainer darkMode={darkMode}>
              <Header />
              <DividerCont>
                <SideBar />
                <HomeOffCont>
                  <PremiumCont premiumPopUp={premiumPopUp}>
                    <PremiumSmlCont>
                      <PremiumImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <SidebarCloseBtn
                        darkMode={darkMode}
                        type="button"
                        onClick={updatePremiumCont}
                      >
                        {' '}
                        <IoClose />{' '}
                      </SidebarCloseBtn>
                    </PremiumSmlCont>
                    <PremiumPera>
                      Buy Nxt Watch Premium prepaid planes with UPI
                    </PremiumPera>
                    <GetPremiumBtn>Get Premium</GetPremiumBtn>
                  </PremiumCont>
                </HomeOffCont>
              </DividerCont>
            </HomeMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
