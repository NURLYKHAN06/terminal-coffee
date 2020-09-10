import React from "react";
import styled from "styled-components";
import { ProductView } from "./ProductView";
import { Button, Controls } from "../lib/styles";

export function Products({ data, title, type, onChangeQuantity }) {
  return (
    <div>
      <h2>{title}</h2>
      <ProductsWrap>
        {data.map(({ title, price, timePrepare, quantity, imgSrc }) => {
          const newProps = { title, price, timePrepare, imgSrc };
          return (
            <ProductWrap key={title}>
              <ProductView {...newProps} />

              <Controls center>
                <Button
                  link
                  onClick={() => onChangeQuantity({ key: type, title, step: -1 })}
                >
                  &#10094;
                </Button>
                <p>{quantity}</p>
                <Button
                  link
                  onClick={() => onChangeQuantity({ key: type, title, step: 1 })}
                >
                  &#10095;
                </Button>
              </Controls>
            </ProductWrap>
          );
        })}
      </ProductsWrap>
    </div>
  );
}

const ProductWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 240px;
  margin: 10px;
  font-size: 18px;
  border-radius: 3px;
  border: 1px solid grey;

  &:hover {
    box-shadow: 1px 2px 5px #afaaaab8;
  }
`;

const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
