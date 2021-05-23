// react
import React from "react";
import { Product, ProductCallback } from "../../types";

import ProductCard from "./ProductCard";
import MasonryList from "../MasonryList/MasonryList";

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
    <MasonryList
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
