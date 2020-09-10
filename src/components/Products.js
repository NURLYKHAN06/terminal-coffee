import React from "react";
import styled from "styled-components";
import { ProductView } from "./ProductView";

export function Products({ data, type, onChangeQuantity }) {
  return (
    <div>
      {data.map(({ title, price, timePrepare, quantity }) => {
        const newProps = { title, price, timePrepare };
        return (
          <Red key={title}>
            <ProductView {...newProps} />

            <div>
              <button onClick={() => onChangeQuantity({ key: type, title, step: 1 })}>
                up
              </button>
              <p>{quantity}</p>
              <button onClick={() => onChangeQuantity({ key: type, title, step: -1 })}>
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
