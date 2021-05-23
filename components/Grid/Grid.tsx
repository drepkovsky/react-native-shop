import React, { createContext, useContext } from "react";
import { ViewStyle } from "react-native";
import Layout from "../../constants/Layout";

import { ContainerProps, Container } from "../Themed";

export type GridProps = ContainerProps & {
  item?: boolean;
  container?: boolean;
  xs?: number;
  sm?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  spacing?: number;
};

const GridContext = createContext({ spacing: 0 });

const Grid = ({
  children,
  item,
  container,
  xs = 12,
  sm = 12,
  direction = "row",
  spacing = 0,
  style,
  ...props
}: GridProps) => {
  const styleProps: ViewStyle = {};

  const context = useContext(GridContext);

  const br = Math.min(Math.max(Layout.isSmallDevice ? xs : sm, 0), 12) / 12;

  if (container)
    Object.assign(styleProps, {
      width: "100%",
      flexWrap: "wrap",
      flexDirection: direction,
      marginHorizontal: -Layout.spacing(context.spacing) / 2,
    });
  if (item)
    Object.assign(styleProps, {
      flexBasiss: br,
      width: `${br * 100}%`,
      flexGrow: 0,
      paddingLeft: Layout.spacing(context.spacing),
      paddingTop: Layout.spacing(context.spacing),
    });

  const body = (
    <Container style={[styleProps, style]} {...props}>
      {children}
    </Container>
  );

  if (container) {
    return (
      <GridContext.Provider value={{ spacing }}>{body}</GridContext.Provider>
    );
  }

  return body;
};

export default Grid;
