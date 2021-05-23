// types
import { PRODUCTS_SET_LOADED, PRODUCTS_SET_LOADING } from "./../types";
import { AppReducer } from "../store";
import { Product } from "../../types";
import { PRODUCTS_SET_PRODUCTS } from "./../types";

export interface ProductsState {
  products: Map<any, Product> | null;
  isLoading: boolean;
}

const initialState = {
  products: null,
  isLoading: false,
};

// Reducers for whole products store logic
const productsReducer: AppReducer<ProductsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PRODUCTS_SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_SET_LOADED:
      return {
        ...state,
        isLoading: false,
      };
    case PRODUCTS_SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
