// types
import { AppThunk } from "../store";
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "../types";

/**
 * @desc adds productId to cart storage
 * @param productId id of product to be added to storage
 */
export const addProductToCart =
  (productId: number): AppThunk =>
  (dispatch) => {
    dispatch({ type: CART_ADD_PRODUCT, payload: { productId: productId } });
  };

/**
 * @desc adds productId to cart storage
 * @param productId id of product to be added to storage
 */
export const removeProductFromCart =
  (productId: number): AppThunk =>
  (dispatch) => {
    dispatch({ type: CART_REMOVE_PRODUCT, payload: { productId: productId } });
  };
