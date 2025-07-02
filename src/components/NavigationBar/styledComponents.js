import Styled from 'styled-components'

export const MainMenuContainer = Styled.div`

  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  color:${props => (props.darkMode ? '#f9f9f9' : '#475569')};
`

export const MenuList = Styled.ul`
    list-style-type:none;
    padding-left:0px;
    width:100%;

`
export const ListItem = Styled.li`
 text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    color:${props => (props.active ? '#ff0000' : '')};
    background-color:${props => {
      const {darkMode, active} = props
      if (active) {
        if (darkMode) {
          return '#424242'
        }
        return '#94a3b8'
      }
      return ''
    }};
    width:100%;
    padding:5px 10px;
`

export const ListItemCont = Styled.div`
   
    display:flex;
    align-items:center;
    width:250px;
    margin:0px;
    cursor:pointer;
`

export const MenuName = Styled.p`
 text-decoration:none;
    font-size:20px;
    margin-left:10px;
    color:${props => (props.darkMode ? '#ffffff' : '#333333')};
    font-weight:${props => (props.active ? 'bold' : 'normal')};
`
export const Link = Styled.a`
    text-decoration:none;
`
