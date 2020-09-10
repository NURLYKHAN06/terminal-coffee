import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <Logo>
      <img src={process.env.PUBLIC_URL + "logo.png"} />
      <h1>React Coffee</h1>
    </Logo>
  );
}

const Logo = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 80px;
  }
`;
