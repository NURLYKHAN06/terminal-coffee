import React from "react";
import styled from "styled-components";

export function ProductView({ title, price, timePrepare, quantity, imgSrc }) {
  return (
    <Product>
      <p>
        {title} - {price ? `${price} тенге` : "Бесплатно"}
      </p>
      {imgSrc && <img src={imgSrc} />}
      {!!timePrepare && <p>Время приготовления: {timePrepare} минуты</p>}
      {quantity && <p>Штук: {quantity}</p>}
    </Product>
  );
}

const Product = styled.div`
  img {
    margin: 10px 0;
    height: 180px;
    object-fit: cover;
    width: 100%;
  }
`;
