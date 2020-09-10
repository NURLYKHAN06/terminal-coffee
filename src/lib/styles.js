import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }
  body {
    font-family: Bitter;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
  }

  button,input{
    outline: none;
    border:none;
  }

  button,a{
    cursor: pointer;
  }

`;

export const Controls = styled.div`
  padding: 10px;
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: center;
  margin-top: ${({ marginTop }) => (marginTop ? "10px" : 0)};

  button {
    margin: 0 5px;
  }

  p {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  background: ${(props) => (props.link ? "none" : "#62dbfb")};
  font-size: 18px;
  color: ${(props) => (props.link ? "#62dbfb" : "#fff")};
  border-radius: 5px;
  margin: 0 3px;

  &:hover {
    box-shadow: 1px 2px 5px #afaaaab8;
  }
`;
