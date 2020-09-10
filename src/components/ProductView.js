import React from "react";

export function ProductView({ title, price, timePrepare, quantity }) {
  return (
    <div>
      <p>{title}</p>
      <p>Цена: {price ? price : "Бесплатно"} </p>
      {!!timePrepare && <p>Время готовки: {timePrepare} минуты</p>}
      {quantity && <p>Штук: {quantity}</p>}
    </div>
  );
}
