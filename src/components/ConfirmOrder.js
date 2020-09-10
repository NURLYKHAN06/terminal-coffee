import React, { useContext } from "react";
import { ProductView } from "./ProductView";
import { store } from "../store/store";
import { toOrder } from "../store/actions";

export function ConfirmOrder({ orderedCoffees, orderedAdditional, setConfirmData }) {
  const { state, dispatch } = useContext(store);
  const total = [...orderedCoffees, ...orderedAdditional].reduce(
    (acc, item) => {
      return {
        timePrepare: item.quantity * item.timePrepare + acc.timePrepare,
        price: item.quantity * item.price + acc.price,
      };
    },
    { timePrepare: 0, price: 0 }
  );

  const onConfirm = () => {
    const payload = {
      coffes: orderedCoffees,
      additional: orderedAdditional,
      total: {
        ...total,
        orderId: state.orderId,
      },
    };
    setConfirmData(null);
    toOrder({ dispatch, payload });
  };

  return (
    <div>
      <h1>Правильно?</h1>
      {state.currentPlace ? <p>Место: {state.currentPlace}</p> : <p>На вынос</p>}
      {orderedCoffees.map(({ title, price, timePrepare, quantity }) => {
        const newProps = { title, price, timePrepare, quantity };
        return <ProductView key={title} {...newProps} />;
      })}

      {orderedAdditional.map(({ title, price, quantity, timePrepare }) => {
        const newProps = { title, price, quantity, timePrepare };
        return <ProductView key={title} {...newProps} />;
      })}

      <p>Время приготовления: {total.timePrepare} минут</p>
      <p>Итого: {total.price} тенге</p>

      <button onClick={onConfirm}>Подвердить</button>
      <button onClick={() => setConfirmData(null)}>Изменить</button>
    </div>
  );
}
