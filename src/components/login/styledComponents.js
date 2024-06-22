import Styled from 'styled-components'

export const LoginMainContainer = Styled.div`
  background-color:${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

export const LoginCard = Styled.div`
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  height: 50%;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  color:${props => (props.darkMode ? '#ffffff' : '#000000')};
  box-shadow:5px 10px 20px 5px;

  @media (width > 576px) and (width < 756px) {
    width: 600px;
  
}

@media (width > 756px) {
    width: 600px;
    padding: 10px 50px;
}

`

export const LoginLogoImg = Styled.img`
     height: 30px;
  justify-self: flex-start;

  @media (width > 578px) {
      height:50px;
  }
`
export const LoginForm = Styled.form`
   width: 100%;
  padding: 10px;
`

export const Label = Styled.label`
  font-weight: bold;
  color:${props => (props.darkMode ? '#ffffff' : '#64748b')} ;
  font-size: 12px;
`
export const InputElement = Styled.input`
    background-color: transparent;
  border: 1px solid #616e7c;
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  color:${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media (width > 578px) {
      padding:10px;
  }
`
export const LoginBtn = Styled.button`
    width: 100%;
  background-color: #3b82f6;
  padding: 10px;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
`
export const ErrorMsg = Styled.p`
    color: #ff0000;
  font-size: 14px;
  align-self: flex-start;
`
