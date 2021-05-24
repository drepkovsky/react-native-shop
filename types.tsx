import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

// navigation
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Shop: undefined;
  Cart: undefined;
  User: undefined;
};

export type TabShopParamList = {
  Products: undefined;
  Details: { productId: number };
};

export type TabCartParamList = {
  Cart: undefined;
  Summary: undefined;
};
export type TabUserParamList = {
  User: undefined;
};

export type ProductScreenNavigationProp = StackNavigationProp<
  TabShopParamList,
  "Products"
>;
export type CartScreenNavigationProp = StackNavigationProp<
  TabCartParamList,
  "Cart"
>;
export type SummaryScreenNavigationProp = StackNavigationProp<
  TabCartParamList,
  "Summary"
>;

export type Snack = {
  message: string;
  duration: number;
};

export type DetailsScreenRouteProp = RouteProp<TabShopParamList, "Details">;

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type Product = {
  id: number;
  category: string;
  description: string;
  title: string;
  price: number;
  image: string;
};

export type ProductCallback = (productID: number) => any;
