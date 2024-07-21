import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  activeMenu: '',
  updateMode: () => {},
  updateActiveMenu: () => {},
})

export default NxtWatchContext
