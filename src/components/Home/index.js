import {Component} from 'react'

import Header from '../Header'

import {HomeMainContainer, PremiumCont} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeMainContainer>
        <PremiumCont>
          <Header />
          <h1>Home</h1>
        </PremiumCont>
      </HomeMainContainer>
    )
  }
}

export default Home
