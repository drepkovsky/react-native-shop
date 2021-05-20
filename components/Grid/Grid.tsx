import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Layout from "../../constants/Layout";

import { View, ViewProps } from "../Themed";

export type GridProps = ViewProps & {
  item?: boolean;
  container?: boolean;
  xs: number;
  sm: number;
  direction: "row" | "column";
};

const Grid = ({
  children,
  item,
  container,
  xs,
  sm,
  direction,
  ...props
}: GridProps) => {
  const styleProps = {};

  const br = Math.max(Math.min(Layout.isSmallDevice ? xs : sm, 0), 12) / 12;

  if (item)
    Object.assign(styleProps, {
      flexBasis: `${br}`,
      width: `${br * 100}%`,
      flexGrow: 0,
    });
  if (container)
    Object.assign(styleProps, { flexWrap: "none", flexDirection: direction });

  return (
    <View style={[styles.root]} {...props}>
      {children}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({ root: { display: "flex" } });
