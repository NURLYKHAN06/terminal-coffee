import React, { useContext } from "react";
import { store } from "../store/store";

export function TableOrders() {
  const { state } = useContext(store);
  const { processOrders, finishedOrders } = state;
  return (
    <div>
      В процессе:
      {processOrders.map(({ orderId, place, remainingSeconds }) => (
        <div key={orderId}>
          <p>Номер заказа: {orderId}</p>
          <p>Место: {place ? place : "На вынос"}</p>
          <p>Осалось: {remainingSeconds} секунд</p>
        </div>
      ))}
      <br />
      Готово:
      {finishedOrders.map(({ orderId, place, doneTime }) => (
        <div key={orderId}>
          <p>Номер заказа: {orderId}</p>
          <p>Место: {place ? place : "На вынос"}</p>
          <p>Завершено в: {doneTime} </p>
        </div>
      ))}
    </div>
  );
}
