import React, { useContext, useState } from "react";
import { store } from "../store/store";
import { changeQuantity } from "../store/actions";
import { Places } from "./Places";
import { ConfirmOrder } from "./ConfirmOrder";
import { Products } from "./Products";
import { Button, Controls } from "../lib/styles";
import styled from "styled-components";

export function Terminal() {
  const [isTakeAway, setIsTakeAway] = useState(1); // 1 is take away
  const { state, dispatch } = useContext(store);
  const { coffees, additional } = state.products;
  const [confirmData, setConfirmData] = useState(null);

  const onChangeQuantity = (payload) => {
    changeQuantity({ dispatch, payload });
  };
  const onOrder = () => {
    const isFill = isTakeAway || (!isTakeAway && state.currentPlace);
    if (!isFill) return alert("Выберите место");
    const orderedCoffees = coffees.filter((coffee) => coffee.quantity);
    const orderedAdditional = additional.filter((item) => item.quantity);
    if (!orderedCoffees.length) return alert("Закажите кофе");
    setConfirmData({ orderedCoffees, orderedAdditional });
    setIsTakeAway(1);
  };

  return (
    <TerminalWrap>
      {!confirmData && (
        <>
          <Products
            type="coffees"
            title="Кофе"
            data={coffees}
            onChangeQuantity={onChangeQuantity}
          />

          <Products
            type="additional"
            title="Дополнительно"
            data={additional}
            onChangeQuantity={onChangeQuantity}
          />

          <Controls>
            <Select
              value={isTakeAway}
              onChange={({ target: { value } }) => setIsTakeAway(+value)}
            >
              <option value={1}>На вынос</option>
              <option value={0}>Здесь</option>
            </Select>
            <Button onClick={onOrder}>Заказать</Button>
          </Controls>

          {!isTakeAway && <Places />}
        </>
      )}

      {confirmData && <ConfirmOrder {...confirmData} setConfirmData={setConfirmData} />}
    </TerminalWrap>
  );
}

const TerminalWrap = styled.div`
  padding: 10px 15px;

  h2 {
    padding: 5px 10px;
  }
`;

const Select = styled.select`
  display: inline-block;
  padding: 6px 5px;
  border-radius: 5px;
`;
