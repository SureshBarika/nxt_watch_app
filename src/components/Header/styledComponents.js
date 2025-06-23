import Styled from 'styled-components'

export const NavBarCont = Styled.nav`
    
    margin:0px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-Color:${props => (props.darkMode ? '#181818' : '#ffffff')};
    font-family:"Roboto";
    width:100%;
    box-shadow:5px 10px -20px 5px;
    border-bottom:1px dotted ${props =>
      props.darkMode ? '#ffffff' : '#181818'};
    @media screen and (min-width:768px) {
        padding:15px;
        height:10vh;
}
`
export const LogoImg = Styled.img`
    height:30px;
     @media screen and (min-width:768px) {
        height:40px;
}
`
export const OptionsContForMBView = Styled.div`
    padding:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and (min-width:768px) {
        width:200px;
}
`

export const NavBtn = Styled.button`
    border:0px;
    background-color:transparent;
    outline:none;
    cursor:pointer;
    font-size:25px;
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    @media screen and (min-width:768px) {
        font-size:30px;
}
`

export const BarBtn = Styled.button`
    border:0px;
    background-color:transparent;
    outline:none;
    cursor:pointer;
    font-size:25px;
    
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    @media screen and (min-width:768px) {
        display:none;
}

`
export const LogoutIcon = Styled.button`
    border:0px;
    background-color:transparent;
    outline:none;
    cursor:pointer;
    font-size:25px;
    
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    @media screen and (min-width:768px) {
        display:none;
}
`

export const LogoutBtnClick = Styled.button`
    border:1px solid ${props => (props.darkMode ? '#ffff' : '#3b82f6')}  ;
    color:${props => (props.darkMode ? '#ffff' : '#3b82f6')};
    padding:5px;
    font-size:20px;
    cursor:pointer;
    background:transparent;
    @media screen and (max-width:768px) {
        display:none;
        
}

`

export const ProfileImg = Styled.img`
        height:34px;
        cursor:pointer;

    @media screen and (max-width:768px) {
        display:none;
}
`

export const LogoutPopupContainer = Styled.div`
font-family:"Roboto";
    margin:40% 10px;
    background-color:${props => (props.darkMode ? '#424242' : '#d7dfe9')};
    padding:10px 15px;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    @media screen and (min-width:768px) {
        height:200px;
        width:400px;
}
`
export const LogoutPera = Styled.p`
text-align:center;
font-family:"Roboto";
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    @media screen and (min-width:768px) {
        font-size:20px;
}
`

export const CloseBtn = Styled.button`
    border:1px solid ${props => (props.darkMode ? '#ffffff' : '#212121')};
    background-color:transparent;
    color:${props => (props.darkMode ? '#ffffff' : '#080808')};
    outline:none;
    cursor:pointer;
     padding:5px 10px;
     border-radius:5px;
      @media screen and (min-width:768px) {
        font-size:20px;
}
`
export const LogoutBtn = Styled.button`
    background-color:#3b82f6;
    border:0px;
    outline:none;
    cursor:pointer;
    color:#fff;
    padding:5px 10px;
    border-radius:5px;
     @media screen and (min-width:768px) {
        font-size:20px;
}
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
