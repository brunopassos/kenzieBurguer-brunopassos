import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  max-width: ${(props) => props.buttonWidth}px;
  

  background: ${(props) => props.buttonBackground};
  border: 2px solid #27ae60;

  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 23px;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

export const StyledDiv2 = styled.div`
    width: 100%;

    @media (min-width: 769px) {    
        display: flex;
        width: 95%;
  }
`

export const StyledDiv = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 902px) {  
        width: 30%;
        position: fixed;
        right: 0;
        max-height: 300px;
  }
`

