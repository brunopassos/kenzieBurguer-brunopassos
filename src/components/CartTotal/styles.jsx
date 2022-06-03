import styled from "styled-components";

export const StyledTotalDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 140px;
  justify-content: space-evenly;

  @media (min-width: 902px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  height: 60px;
  color: #828282;
  font-size: 16px;
  font-family: "Inter", sans-serif;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledP = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333333;
`;

export const StyledP2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: #828282;
`;
