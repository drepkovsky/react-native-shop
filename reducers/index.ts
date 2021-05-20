import { combineReducers } from "redux";
import productsReducer from "./red_products";

export default combineReducers({
  products: productsReducer,
});
