import Styled from 'styled-components'

export const HomeMainContainer = Styled.div`
<<<<<<< HEAD
=======
    
>>>>>>> 2ca532d77b35aee9f418e31ff4631a9d49e14056
    padding:0px;
    background-Color:${props => (props.darkMode ? '#080808' : '#ffffff')};
    min-height:100vh;
`

export const PremiumCont = Styled.div`
    display:${props => (props.premiumPopUp ? 'block' : 'none')};
    background-image : url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size:cover;
    padding:5px 10px;
`

export const PremiumSmlCont = Styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
    
`

export const PremiumImg = Styled.img`
    height:50px;
    bottom:0px;
    @media screen and (max-width:782px) {
        height:40px;

    }
`

export const SidebarCloseBtn = Styled.button`
    border:0px;
    background-color:transparent;
    outline:none;
    font-size:25px;
   color:#080808;
   align-self:flex-end;
   cursor:pointer;
   top:0px;
   
`

export const PremiumPera = Styled.p`
    color:#475569;
    font-family:"Roboto";
    font-size:29px;
    margin:5px;

`
export const GetPremiumBtn = Styled.button`
    background-color:transparent;
    padding:10px;
    border:2px solid #181818;
    border-radius:5px;
    color:#64748b;
    font-family:"Roboto";
    font-size:18px;
    cursor:pointer;
    margin:5px;
`

export const DividerCont = Styled.div`
        display:flex;
`

export const HomeOffCont = Styled.div`
    width:100%;
    min-height:100%;
`
export const HomeContainerMainInfo = Styled.div`
        height:100%;
        background-color:${props => (props.darkMode ? '#080808' : '#f1f5f9')};
        display:flex;
        flex-direction:column;
        align-items:center;
        min-height:100vh;
        padding:10px;
`
export const SearchContainer = Styled.div`
        border:1px solid #475569;

`

export const SearchInput = Styled.input`
            padding:5px ;
            background-color:transparent;
            border:0px;
            outline:none;
            

`
