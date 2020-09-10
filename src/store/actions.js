import {
  CHANGE_QUANTITY,
  CHANGE_PLACE,
  TO_ORDER,
  CHANGE_PROCESS_ORDER,
} from "./action.types";

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

export const toOrder = ({ dispatch, payload }) => {
  // loader, requests
  dispatch({
    type: TO_ORDER,
    payload,
  });
};

export const changeProcessOrder = ({ dispatch, payload }) => {
  const id = setInterval(() => {
    dispatch({
      type: CHANGE_PROCESS_ORDER,
      payload,
    });
  }, 1000 / 10);

  setTimeout(() => {
    clearInterval(id);
    dispatch({
      type: CHANGE_PROCESS_ORDER,
      payload: {
        ...payload,
        done: true,
        doneTime: new Date().toLocaleTimeString(),
      },
    });
  }, (payload.remainingSeconds * 1000) / 10);
};
