import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 300px;
  height: 346px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

  @media (min-width: 769px) {
    margin-bottom: 20px;
  }
`;

export const StyledImg = styled.img`
  width: 178px;
  height: 50%;
  margin-left: 61px;
  margin-right: 61px;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 50%;
  margin-left: 21px;
  font-family: "Inter", sans-serif;
`;

export const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export const StyledP = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #27ae60;
`;
