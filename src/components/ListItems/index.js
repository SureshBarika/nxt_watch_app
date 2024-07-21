import {withRouter, Link} from 'react-router-dom'

import {ListItem, ListItemCont, MenuName} from './styledComponents'

const ListItems = props => {
  const {item, updateActiveMenuId, activeMenu, darkMode, close} = props
  const {id, displayText, icon, path} = item
  const active = activeMenu === id
  // console.log(path)

  const updateAsActive = () => {
    close()
    updateActiveMenuId(id)
    const {history} = props
    history.replace(`/${path}`)
    //  console.log(id)
  }

  return (
    <ListItem onClick={updateAsActive} active={active} darkMode={darkMode}>
      <ListItemCont>
        {icon}
        <MenuName darkMode={darkMode} active={active}>
          {displayText}
        </MenuName>
      </ListItemCont>
    </ListItem>
  )
}

export default withRouter(ListItems)
