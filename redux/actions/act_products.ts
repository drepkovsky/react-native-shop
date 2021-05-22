// types
import { Product } from "../../types";
import { AppThunk } from "../store";
import { PRODUCTS_SET_LOADING } from "./../types";

// api
import { fetchProducts } from "../../api/products";
import { PRODUCTS_SET_PRODUCTS } from "./../types";

/**
 * @desc fetches products and loads them to store
 *
 */
export const loadProducts = (): AppThunk => (dispatch) => {
  // fetch data and add dispatch action ass callback
  fetchProducts((products) => dispatch(setProducts(products)));
  // dispatch change of loading state
  dispatch({ type: PRODUCTS_SET_LOADING });
};

/**
 * @desc dispatches fetched data to store
 * @param {Product[]} products
 */
export const setProducts =
  (products: Product[]): AppThunk =>
  (dispatch) => {
    console.log(products);
    // dispatch products to store
    dispatch({ type: PRODUCTS_SET_PRODUCTS, payload: { products } });
  };
