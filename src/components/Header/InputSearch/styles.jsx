import styled from "styled-components";

export const StyledForm = styled.form`
  width: 350px;
  height: 60px;

  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-right: 5%;
  }
`;

export const StyledImput = styled.input`
  border: none;
  outline: none;
  opacity: 0.6;
  font-weight: 400;
  font-size: 16px;
  font-family: "Inter", sans-serif;
`;

export const StyledButton = styled.button`
  width: 107px;
  height: 40px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;

  background: #27ae60;

  color: #ffffff;
  border: 2px solid #27ae60;
  border-radius: 8px;
`;
