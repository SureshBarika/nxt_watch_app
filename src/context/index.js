import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  activeMenu: '',
  premiumPopUp: true,
  updateMode: () => {},
  updateActiveMenu: () => {},
  updatePremiumPopUp: () => {},
})

export default NxtWatchContext
