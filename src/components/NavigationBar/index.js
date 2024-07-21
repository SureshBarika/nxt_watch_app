import {Link, withRouter} from 'react-router-dom'

import {IoHomeSharp, IoGameController} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context'

import ListItems from '../ListItems'

import {
  MainMenuContainer,
  MenuList,
  ListItem,
  ListItemCont,
  MenuName,
} from './styledComponents'

const menuBar = [
  {
    id: 'HOME',
    displayText: 'Home',
    icon: <IoHomeSharp />,
    path: '',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    icon: <HiFire />,
    path: 'trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    icon: <IoGameController />,
    path: 'gaming',
  },
  {
    id: 'SAVED',
    displayText: 'Saved videos',
    icon: <BiListPlus />,
    path: 'saved-videos',
  },
]

/* const ListItems = props => {
  const {item, updateActiveMenuId, activeMenu, darkMode, close} = props
  const {id, displayText, icon, path} = item
  const active = activeMenu === id
  // console.log(path)

  const updateAsActive = () => {
    close()
    updateActiveMenuId(id)
    //  console.log(id)
  }

  return (
    <Link to={`/${path}`}>
      <ListItem onClick={updateAsActive} active={active} darkMode={darkMode}>
        <ListItemCont>
          {icon}
          <MenuName darkMode={darkMode} active={active}>
            {displayText}
          </MenuName>
        </ListItemCont>
      </ListItem>
    </Link>
  )
} */

const MenuBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {closePopUp} = props
      const {activeMenu, updateActiveMenu, darkMode} = value
      // console.log(activeMenu)
      const updateActiveMenuId = id => {
        updateActiveMenu(id)
      }
      return (
        <MainMenuContainer darkMode={darkMode}>
          <MenuList>
            {menuBar.map(item => (
              <ListItems
                close={closePopUp}
                activeMenu={activeMenu}
                item={item}
                key={item.id}
                updateActiveMenuId={updateActiveMenuId}
                darkMode={darkMode}
              />
            ))}
          </MenuList>
        </MainMenuContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(MenuBar)
