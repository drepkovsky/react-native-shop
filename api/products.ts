import { Product } from "../types";

export const fetchProducts = (callback: (res: Product[]) => any) => {
  fetch("https://fakestoreapi.com/products?limit=20")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      callback(json);
    });
};
