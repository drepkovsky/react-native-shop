import { Reducer } from "../store";

interface ProductsState {
  products: { [key: string]: {} };
}

const initialState = {
  products: {},
};

const productsReducer: Reducer<ProductsState> = (
  state = initialState,
  action
) => {
  return state;
};

export default productsReducer;
