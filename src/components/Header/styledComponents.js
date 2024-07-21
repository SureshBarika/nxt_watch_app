import Styled from 'styled-components'

export const NavBarCont = Styled.nav`
    margin:0px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-Color:${props => (props.darkMode ? '#080808' : '#ffffff')};
    font-family:"Roboto";
`
export const LogoImg = Styled.img`
    height:20px;
`
export const OptionsContForMBView = Styled.div`
    padding:5px;
    display:flex;
    justify-content:space-between;
    align-items:center; 
`

export const NavBtn = Styled.button`
    border:0px;
    background-color:transparent;
    outline:none;
    cursor:pointer;
    font-size:25px;
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    
`

export const LogoutPopupContainer = Styled.div`
    margin:40% 10px;
    background-color:${props => (props.darkMode ? '#424242' : '#d7dfe9')};
    padding:10px 15px;
    border-radius:8px;
`
export const LogoutPera = Styled.p`
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
`

export const CloseBtn = Styled.button`
    border:1px solid ${props => (props.darkMode ? '#ffffff' : '#212121')};
    background-color:transparent;
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    outline:none;
    cursor:pointer;
     padding:5px 10px;
     border-radius:5px;
`
export const LogoutBtn = Styled.button`
    background-color:#3b82f6;
    border:0px;
    outline:none;
    cursor:pointer;
    color:#fff;
    padding:5px 10px;
    border-radius:5px;
`
export const BtnsCont = Styled.div`
    display:flex;
    justify-content:space-around;
`
export const SideBarForMBView = Styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`

export const SidebarCloseBtn = Styled.button`
    margin:20px;
    border:0px;
    background-color:transparent;
    outline:none;
    font-size:25px;
   color:${props => (props.darkMode ? '#ffffff' : '#080808')};
   align-self:flex-end;

`
