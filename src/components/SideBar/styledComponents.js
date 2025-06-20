import Styled from 'styled-components'

export const SideBarMainCont = Styled.div`
    display:fixed;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:250px;
    height:90vh;
    padding:10px;
    background-color:${props => (props.darkMode ? '#181818' : '#ffff')};
    @media screen and (max-width:768px) {
        display:none;
    }

`

export const ContactUsCont = Styled.div`
    display:flex;
    flex-direction:column;

`
export const ContactHed = Styled.h1`
    font-family:"Roboto";
    font-size:25px;
    color:${props => (props.darkMode ? '#ebebeb' : '#313131')};
    font-weight:bold;
`

export const IconsCont = Styled.div`
    width:100%;
    display:flex;

`
export const ContactUsLogos = Styled.img`
    height:40px;
    border-radius:50%;
    cursor:pointer;
    margin:5px 10px;
`

export const ContactUsPera = Styled.p`
        font-family:"Roboto";
        font-size:20px;
        font-weight:450;
        color:${props => (props.darkMode ? '#ebebeb' : '#313131')};
`
