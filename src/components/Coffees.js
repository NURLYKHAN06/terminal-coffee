import React, { useContext, useState } from "react";
import { store } from "../store/store";
import { ProductView } from "./ProductView";
import styled from "styled-components";

export function Coffees() {
  const { state, dispatch } = useContext(store);
  const { coffees, additional } = state.products;

  const changeQuantity = (type, title, step) => {
    console.log(4);
  };

  return (
    <div>
      <h3>Кофе</h3>
      {coffees.map(({ title, price, timePrepare, quantity }) => {
        const newProps = { title, price, timePrepare };
        return (
          <Red key={title}>
            <ProductView {...newProps} />

            <div>
              <button onClick={() => changeQuantity("coffee", title, 1)}>up</button>
              <p>{quantity}</p>
              <button onClick={() => changeQuantity("coffee", title, -1)}>down</button>
            </div>
          </Red>
        );
      })}

      <h3>Дополнительно</h3>
      {additional.map(({ title, price, quantity }) => {
        const newProps = { title, price };
        return (
          <Red key={title}>
            <ProductView {...newProps} />

            <div>
              <button onClick={() => changeQuantity("additional", title, 1)}>up</button>
              <p>{quantity}</p>
              <button onClick={() => changeQuantity("additional", title, -1)}>
                down
              </button>
            </div>
          </Red>
        );
      })}
    </div>
  );
}

const Red = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
`;
