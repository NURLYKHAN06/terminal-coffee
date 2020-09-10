import React, { useContext } from "react";
import { store } from "../store/store";
import styled from "styled-components";

export function TableOrders() {
  const { state } = useContext(store);
  const { processOrders, finishedOrders } = state;
  return (
    <Wrapper>
      В процессе:
      <Orders>
        {processOrders.map(({ orderId, place, remainingSeconds }) => (
          <div key={orderId}>
            <p>Номер заказа: {orderId}</p>
            <p>Место: {place ? place : "На вынос"}</p>
            <p>Осталось: {remainingSeconds} секунд</p>
          </div>
        ))}
      </Orders>
      Готово:
      <Orders>
        {finishedOrders.map(({ orderId, place, doneTime }) => (
          <div key={orderId}>
            <p>Номер заказа: {orderId}</p>
            <p>Место: {place ? place : "На вынос"}</p>
            <p>Завершено в: {doneTime} </p>
          </div>
        ))}
      </Orders>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #333;
  color: #62dbfb;
  padding: 10px 15px;
  font-weight: 900;
  font-size: 20px;
`;

const Orders = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin: 5px;
    border: 1px solid #caa0a0c2;
    padding: 5px;
    width: 160px;
    border-radius: 5px;
    font-size: 16px;
  }
`;
