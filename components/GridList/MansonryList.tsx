// react
import React, { useEffect, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
import Layout from "../../constants/Layout";
import Grid from "../Grid/Grid";

// internal
import { ContainerProps } from "../Themed";

export type MansonryListProps = ContainerProps & {
  data: readonly any[] | null | undefined;
  renderItem: MansonryListRenderItemFunc<any>;
  colsXs?: number;
  colsSm?: number;
  spacing?: number;
};

export type MansonryListRenderItem<T> = {
  item: T;
  index: number;
};
export type MansonryListRenderItemFunc<T> = (
  item: MansonryListRenderItem<T>
) => any;

/**
 * TODO scroll optimalization
 *
 * @desc can by very inefficient for a large amount of data because of offset cells rendering
 * @returns simple mansonry lists populated by data
 */
const MansonryList = ({
  data,
  renderItem,
  colsXs = 1,
  colsSm = 1,
  spacing = 0.5,
}: MansonryListProps) => {
  const [dataSet, setDataSet] = useState<any[][] | null>(null);
  // const [scrollOfset, setScrollOfset] = useState(0);
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const tmpCols = Layout.isSmallDevice ? colsXs : colsSm;
    const tmpDataSet: any[][] = [];

    // init dataSets arrays
    for (let i = 0; i < tmpCols; i++) {
      tmpDataSet[i] = [];
    }
    if (data)
      // fill each dataset with appropriate item
      for (let i = 0; i < data.length; i++) {
        const index = i % tmpCols;

        tmpDataSet[index].push(data[i]);
      }

    setCols(tmpCols);
    setDataSet(tmpDataSet);
  }, [colsXs, colsSm, data]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // console.log(e.nativeEvent.contentOffset);
  };

  const elements = [];

  const br = 12 / cols;
  for (let i = 0; i < cols; i++) {
    elements.push(
      <Grid key={i} container item xs={br} sm={br} spacing={spacing}>
        {dataSet &&
          dataSet[i].map((item, index) => {
            return (
              <Grid key={index} item xs={12} sm={12}>
                {renderItem({ item, index })}
              </Grid>
            );
          })}
      </Grid>
    );
  }

  return (
    <ScrollView onScroll={onScroll}>
      <Grid container spacing={spacing}>
        {elements}
      </Grid>
    </ScrollView>
  );
};

export default MansonryList;
