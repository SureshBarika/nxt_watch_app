import Styled from 'styled-components'

export const SideBarCont = Styled.div`
     width:300px;
    height:100vh;
     background-color:${props => (props.darkMode ? '#181818' : '#ffff')};
     @media screen and (max-width:768px) {
        display:none;
    }
`

export const SideBarMainCont = Styled.div`
<<<<<<< HEAD
   position:fixed;
=======
>>>>>>> 2ca532d77b35aee9f418e31ff4631a9d49e14056
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:250px;
    max-height:100vh;
    padding:10px;
<<<<<<< HEAD
=======
    bottom:0;
    background-color:${props => (props.darkMode ? '#181818' : '#ffff')};
    @media screen and (max-width:768px) {
        display:none;
    }

>>>>>>> 2ca532d77b35aee9f418e31ff4631a9d49e14056
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
