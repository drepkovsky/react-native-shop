// types
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_CLEAN } from "../types";
import { AppReducer } from "../store";

export interface CardState {
  products: { [key: string]: number };
}

const initialState = {
  products: {},
};

// Reducers for cart store logic
const cartReducer: AppReducer<CardState> = (state = initialState, action) => {
  switch (action.type) {
    case CART_CLEAN: {
      return { products: {} };
    }
    case CART_ADD_PRODUCT: {
      const res = (state.products[action.payload.productId] || 0) + 1;
      return {
        ...state,
        products: { ...state.products, [action.payload.productId]: res },
      };
    }
    case CART_REMOVE_PRODUCT: {
      const res = (state.products[action.payload.productId] || 1) - 1;
      if (!res) {
        delete state.products[action.payload.productId];
        return {
          ...state,
          products: { ...state.products },
        };
      } else {
        return {
          ...state,
          products: { ...state.products, [action.payload.productId]: res },
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
