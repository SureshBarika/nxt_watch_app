import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context'

import MenuBar from '../NavigationBar'

import {
  SideBarMainCont,
  ContactUsCont,
  ContactHed,
  IconsCont,
  ContactUsLogos,
  ContactUsPera,
} from './styledComponents'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <SideBarMainCont darkMode={darkMode}>
          <MenuBar closePopUp={() => undefined} />
          <ContactUsCont>
            <ContactHed darkMode={darkMode}>CONTACT US</ContactHed>
            <IconsCont>
              <ContactUsLogos
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsLogos
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsLogos
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linkdin logo"
              />
            </IconsCont>
            <ContactUsPera darkMode={darkMode}>
              Enjoy! Now to see your Channels and recommendations!
            </ContactUsPera>
          </ContactUsCont>
        </SideBarMainCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(SideBar)
