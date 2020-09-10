import {
  CHANGE_QUANTITY,
  CHANGE_PLACE,
  TO_ORDER,
  CHANGE_PROCESS_ORDER,
} from "./action.types";

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_QUANTITY:
      const { key, title, step } = payload;
      const newProducts = state.products[key].map((product) => {
        if (product.title === title) {
          const newQuantity = product.quantity + step;
          return {
            ...product,
            quantity: newQuantity < 0 ? 0 : newQuantity,
          };
        }
        return product;
      });
      return {
        ...state,
        products: { ...state.products, [key]: newProducts },
      };
    case CHANGE_PLACE:
      const { id, orderId } = payload;
      let currentPlace = null;
      const newPlaces = state.places.map((place) => {
        const isBusy = !!place.owner && place.owner !== orderId;
        if (isBusy) return place;

        if (place.id === id) {
          currentPlace = place.owner ? null : place.id;
          return {
            id: place.id,
            owner: place.owner ? null : orderId,
          };
        }
        return {
          id: place.id,
          owner: null,
        };
      });

      return {
        ...state,
        places: newPlaces,
        currentPlace,
      };
    case TO_ORDER:
      const newOrder = {
        ...payload,
        ...payload.total,
        place: state.currentPlace,
        remainingSeconds: payload.total.timePrepare * 60,
      };

      delete newOrder.total;

      return {
        ...state,
        processOrders: [...state.processOrders, newOrder],
        products: {
          coffees: state.products.coffees.map((coffee) => ({ ...coffee, quantity: 0 })),
          additional: state.products.additional.map((item) => ({ ...item, quantity: 0 })),
        },
        currentPlace: null,
        orderId: state.orderId + 1,
      };
    case CHANGE_PROCESS_ORDER:
      let processOrders = [...state.processOrders];
      let finishedOrders = [...state.finishedOrders];

      if (payload.done) {
        finishedOrders.push(payload);
        processOrders = processOrders.filter(
          (order) => order.orderId !== payload.orderId
        );
      } else {
        processOrders = state.processOrders.map((order) => {
          return {
            ...order,
            remainingSeconds:
              order.orderId === payload.orderId
                ? order.remainingSeconds - 1
                : order.remainingSeconds,
          };
        });
      }

      return {
        ...state,
        processOrders,
        finishedOrders,
      };
    default:
      return state;
  }
};
