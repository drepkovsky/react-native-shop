// react
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Product } from "../../types";
import Grid from "../Grid/Grid";

import ProductCard from "./ProductCard";
import { ScrollView } from "react-native-gesture-handler";

export type ProductsListProps = {
  data: Product[];
};

const ProductsList = ({ data }: ProductsListProps) => {
  const [dataSet, setDataSet] = useState<{
    data1: Product[];
    data2: Product[];
  }>({ data1: [], data2: [] });

  useEffect(() => {
    const data1 = [];
    const data2 = [];

    let i = 0;
    for (const item of data) {
      if (i % 2 == 0) data1.push(item);
      else data2.push(item);
      i++;
    }
    setDataSet({ data1, data2 });
  }, [data]);

  return (
    <ScrollView>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <FlatList
            style={{ flex: 1 }}
            scrollEnabled={false}
            data={dataSet.data1}
            renderItem={(item) => {
              return <ProductCard product={item.item} key={item.index} />;
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <FlatList
            style={{ flex: 1 }}
            scrollEnabled={false}
            data={dataSet.data2}
            renderItem={(item) => {
              return <ProductCard product={item.item} key={item.index} />;
            }}
          />
        </Grid>
      </Grid>
    </ScrollView>
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
