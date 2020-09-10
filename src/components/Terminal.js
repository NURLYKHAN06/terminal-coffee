import React, { useContext, useState } from "react";
import { store } from "../store/store";
import { changeQuantity } from "../store/actions";
import { Places } from "./Places";
import { ConfirmOrder } from "./ConfirmOrder";
import { Products } from "./Products";

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
    if (!isFill) return;
    const orderedCoffees = coffees.filter((coffee) => coffee.quantity);
    const orderedAdditional = additional.filter((item) => item.quantity);
    if (!orderedCoffees.length) return alert("Закажите кофе");
    setConfirmData({ orderedCoffees, orderedAdditional });
    setIsTakeAway(1);
  };

  return (
    <div>
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

          <select
            value={isTakeAway}
            onChange={({ target: { value } }) => setIsTakeAway(+value)}
          >
            <option value={1}>На вынос</option>
            <option value={0}>Здесь</option>
          </select>

          {!isTakeAway && <Places />}
          <button onClick={onOrder}>Заказать</button>
        </>
      )}

      {confirmData && <ConfirmOrder {...confirmData} setConfirmData={setConfirmData} />}
    </div>
  );
}
