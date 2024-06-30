import Styled from 'styled-components'

export const HomeMainContainer = Styled.div`
    height:100vh;
    padding:0px;
    background-Color:${props => (props.darkMode ? '#080808' : '#ffffff')};
`
export const PremiumCont = Styled.div`
    padding:10px;
`
