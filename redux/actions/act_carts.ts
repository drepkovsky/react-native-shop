// types
import { AppThunk } from "../store";
import { CART_ADD_PRODUCT } from "../types";

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
export const subtractProductFromCart =
  (productId: number): AppThunk =>
  (dispatch) => {
    dispatch({ type: CART_ADD_PRODUCT, payload: { productId: productId } });
  };
