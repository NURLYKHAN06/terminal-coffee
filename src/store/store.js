import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { products } from "./data.products";

export const INITIAL_STATE = {
  products,
  processOrders: [],
  places: new Array(8).fill(0).map((item, index) => ({ id: ++index, owner: null })), // [{id: 1, isBusy: false}]
  orderId: 1,
  currentPlace: null,
};

const store = React.createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Subscribe to changes
  useEffect(() => {
    console.log(state);
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
