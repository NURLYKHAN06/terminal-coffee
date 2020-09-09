import { CHANGE_QUANTITY, CHANGE_PLACE } from "./action.types";

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
    default:
      return state;
  }
};
