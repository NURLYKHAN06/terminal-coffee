import React, { useContext, useState } from "react";
import styled from "styled-components";
import { store } from "../store/store";
import { ProductView } from "./ProductView";
import { changeQuantity } from "../store/actions";
import { Places } from "./Places";

export function Coffees() {
  const [isTakeAway, setIsTakeAway] = useState(1); // 1 is take away
  const { state, dispatch } = useContext(store);
  const { coffees, additional } = state.products;

  const onChangeQuantity = (payload) => {
    changeQuantity({ dispatch, payload });
  };
  const onOrder = () => {
    if (isTakeAway || (!isTakeAway && state.currentPlace)) {
      console.log("a");
    }
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
              <button
                onClick={() => onChangeQuantity({ key: "coffees", title, step: 1 })}
              >
                up
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => onChangeQuantity({ key: "coffees", title, step: -1 })}
              >
                down
              </button>
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
              <button
                onClick={() => onChangeQuantity({ key: "additional", title, step: 1 })}
              >
                up
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => onChangeQuantity({ key: "additional", title, step: -1 })}
              >
                down
              </button>
            </div>
          </Red>
        );
      })}

      <select
        value={isTakeAway}
        onChange={({ target: { value } }) => setIsTakeAway(+value)}
      >
        <option value={1}>На вынос</option>
        <option value={0}>Здесь</option>
      </select>

      {!isTakeAway && <Places />}

      <button onClick={onOrder}>Заказать</button>
    </div>
  );
}

const Red = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
`;
