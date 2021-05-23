// types
import { CART_ADD_PRODUCT, CART_SUBTRACT_PRODUCT } from "../types";
import { AppReducer } from "../store";

export interface CardState {
  products: Map<any, number>;
}

const initialState = {
  products: new Map(),
};

// Reducers for cart store logic
const cartReducer: AppReducer<CardState> = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT: {
      const res = (state.products?.get(action.payload.productsId) || 0) + 1;
      state.products.set(action.payload.productsId, res);
      return state;
    }
    case CART_SUBTRACT_PRODUCT: {
      let res = state.products?.get(action.payload.productsId);
      if (res !== undefined) {
        res -= 1;
        if (res === 0) state.products.delete(action.payload.productsId);
        else state.products.set(action.payload.productsId, res);
      }
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
