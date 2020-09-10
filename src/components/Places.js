import React, { useContext } from "react";
import { store } from "../store/store";
import { Place } from "./Place";
import { changePlace } from "../store/actions";
import styled from "styled-components";

export function Places() {
  const { state, dispatch } = useContext(store);

  const onChangePlace = (payload) => {
    changePlace({ dispatch, payload });
  };

  return (
    <div>
      <h2>Выберите место</h2>
      <Grid>
        {state.places.map(({ id, owner }) => (
          <Place
            key={id}
            id={id}
            owner={owner}
            orderId={state.orderId}
            changePlace={onChangePlace}
          />
        ))}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
  padding: 10px;
`;
