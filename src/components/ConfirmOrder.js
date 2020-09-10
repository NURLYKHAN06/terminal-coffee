import React, { useContext } from "react";
import { ProductView } from "./ProductView";
import { store } from "../store/store";
import { toOrder } from "../store/actions";
import { Button, Controls } from "../lib/styles";
import styled from "styled-components";

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
    <ConfirmBox>
      <h2>Правильно?</h2>
      {state.currentPlace ? <p>Место: {state.currentPlace}</p> : <p>На вынос</p>}
      {orderedCoffees.map(({ title, price, quantity }) => {
        const newProps = { title, price, quantity };
        return <ProductView key={title} {...newProps} />;
      })}

      {orderedAdditional.map(({ title, price, quantity }) => {
        const newProps = { title, price, quantity };
        return <ProductView key={title} {...newProps} />;
      })}

      <p>Время приготовления: {total.timePrepare} минут</p>
      <p>Итого: {total.price} тенге</p>
      <Controls marginTop>
        <Button onClick={onConfirm}>Подвердить</Button>
        <Button onClick={() => setConfirmData(null)}>Изменить</Button>
      </Controls>
    </ConfirmBox>
  );
}

const ConfirmBox = styled.div`
  & > * {
    padding: 3px 10px;
  }
`;
