import { CHANGE_QUANTITY, CHANGE_PLACE } from "./action.types";

export const changeQuantity = ({ dispatch, payload }) => {
  // loader, requests
  dispatch({
    type: CHANGE_QUANTITY,
    payload,
  });
};

export const changePlace = ({ dispatch, payload }) => {
  // loader, requests
  dispatch({
    type: CHANGE_PLACE,
    payload,
  });
};
