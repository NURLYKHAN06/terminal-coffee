import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { products } from "./data.products";
import { usePrevious } from "../lib/usePrevious";
import { changeProcessOrder } from "./actions";

const INITIAL_STATE = {
  products,
  processOrders: [],
  finishedOrders: [],
  places: new Array(9).fill(0).map((item, index) => ({ id: ++index, owner: null })), // [{id: 1, isBusy: false}]
  orderId: 1, // next orderId
  currentPlace: null,
};

const store = React.createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const prevState = usePrevious(state);

  const watcher = () => {
    const isInit = prevState;
    if (!isInit) return;
    if (state.processOrders.length > prevState.processOrders.length) {
      changeProcessOrder({
        dispatch,
        payload: state.processOrders[state.processOrders.length - 1],
      });
    }
  };

  // Subscribe to changes
  useEffect(() => {
    watcher();
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
