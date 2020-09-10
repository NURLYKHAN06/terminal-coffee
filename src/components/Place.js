import React from "react";
import styled from "styled-components";

export function Place({ id, owner, changePlace, orderId }) {
  return (
    <Block busy={owner} onClick={() => changePlace({ id, orderId })}>
      {owner ? "занято" : `Номер:${id}`}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid rgb(244, 67, 54);
  margin: 5px 0;
  border-radius: 5px;
  background: ${({ busy }) => (busy ? "rgb(244, 67, 54)" : "none")};
  color: ${({ busy }) => (busy ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 5px #afaaaab8;
  }
`;
