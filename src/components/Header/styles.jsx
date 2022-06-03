import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #f5f5f5;
  width: 100vw;
  height: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;


  @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;      
  }

  
`;
