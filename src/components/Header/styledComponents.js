import Styled from 'styled-components'

export const NavBarCont = Styled.nav`
margin:0px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-Color:${props => (props.darkMode ? '#080808' : '#ffffff')};
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
    @media (width > 576px) {
        display:none;
    }
`
