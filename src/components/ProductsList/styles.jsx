import styled from "styled-components";

export const StyledSection = styled.section`
  @media (max-width: 768px) {
    width: 100%;
    height: 380px;
    overflow: hidden;
    overflow-x: scroll;
    gap: 15%;
    display: flex;
  }

  @media (min-width: 769px) {
    width: 70%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
