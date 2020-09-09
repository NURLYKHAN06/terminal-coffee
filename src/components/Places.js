import React, { useContext } from "react";
import { store } from "../store/store";
import { Place } from "./Place";
import { changePlace } from "../store/actions";

export function Places() {
  const { state, dispatch } = useContext(store);

  const onChangePlace = (payload) => {
    changePlace({ dispatch, payload });
  };

  return (
    <div>
      <h1>Месты:</h1>
      {state.places.map(({ id, owner }) => (
        <Place
          key={id}
          id={id}
          owner={owner}
          orderId={state.orderId}
          changePlace={onChangePlace}
        />
      ))}
    </div>
  );
}
