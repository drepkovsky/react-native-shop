// react
import React from "react";
import { RefreshControlProps } from "react-native";
import { Product, ProductCallback } from "../../types";

import ProductCard from "./ProductCard";
import MansonryList from "../GridList/MansonryList";

export type ProductsListProps = {
  data: Product[];
  onProductClick: ProductCallback;
};

/**
 * @desc receives products data and populates grid list of product cards
 * @returns populated 2 cols list of product cards
 */
const ProductsList = ({ data, onProductClick }: ProductsListProps) => {
  return (
    <MansonryList
      colsXs={2}
      colsSm={2}
      data={data}
      renderItem={(item) => {
        return (
          <ProductCard
            onProductClick={onProductClick}
            product={item.item}
            key={item.index}
          />
        );
      }}
    />
  );
};

export default ProductsList;
