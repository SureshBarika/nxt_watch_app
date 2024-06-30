import {Component} from 'react'

import NxtWatchContext from '../../context'

import Header from '../Header'

import {HomeMainContainer, PremiumCont} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <HomeMainContainer darkMode={darkMode}>
              <Header />
              <PremiumCont>
                <h1>Home</h1>
              </PremiumCont>
            </HomeMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
