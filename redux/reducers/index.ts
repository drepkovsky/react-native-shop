import { combineReducers } from "redux";
import productsReducer from "./red_products";
import cartReducer from "./red_cart";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
