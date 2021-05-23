// react
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

// internal
import Layout from "../../constants/Layout";
import Grid from "../Grid/Grid";
import { ContainerProps } from "../Themed";

export type MasonryListProps = ContainerProps & {
  data: readonly any[] | null | undefined;
  renderItem: MasonryListRenderItemFunc<any>;
  colsXs?: number;
  colsSm?: number;
  spacing?: number;
};

export type MasonryListRenderItem<T> = {
  item: T;
  index: number;
};
export type MasonryListRenderItemFunc<T> = (
  item: MasonryListRenderItem<T>
) => any;

/**
 *
 * @desc custom grid view with a masonry look, default flat list doesn't have this feature
 * @returns simple masonry lists populated by data
 */
const MasonryList = ({
  data,
  renderItem,
  colsXs = 1,
  colsSm = 1,
  spacing = 0.5,
}: MasonryListProps) => {
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
    <ScrollView>
      <Grid container spacing={spacing}>
        {elements}
      </Grid>
    </ScrollView>
  );
};

export default MasonryList;
