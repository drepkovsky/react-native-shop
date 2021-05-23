// types
import { Product } from "../../types";
import { AppThunk } from "../store";
import {
  PRODUCTS_SET_LOADED,
  PRODUCTS_SET_LOADING,
  PRODUCTS_SET_PRODUCTS,
} from "./../types";

// api
import { fetchProducts } from "../../api/products";

/**
 * @desc fetches products and loads them to store
 *
 */
export const loadProducts = (): AppThunk => (dispatch) => {
  // fetch data and add dispatch action ass callback
  fetchProducts((products) => dispatch(setProducts(products)));
  // dispatch change of loading state
  dispatch({ type: PRODUCTS_SET_LOADING });

  setTimeout(() => dispatch({ type: PRODUCTS_SET_LOADED }), 3000);
};

/**
 * @desc dispatches fetched data to store
 * @param {Product[]} products
 */
export const setProducts =
  (products: Product[]): AppThunk =>
  (dispatch) => {
    // dispatch products to store

    const mapProducts = new Map();
    products.forEach((product) => {
      mapProducts.set(product.id, product);
    });

    dispatch({
      type: PRODUCTS_SET_PRODUCTS,
      payload: { products: mapProducts },
    });
  };
