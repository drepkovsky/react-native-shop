import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// internal
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import {
  BottomTabParamList,
  TabShopParamList,
  TabCartParamList,
  TabUserParamList,
} from "../types";
import UserScreen from "../screens/UserScreen";

// Create basic routing of our route

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].brand }}>
      {/* shop tab */}
      <BottomTab.Screen
        name="Shop"
        component={TabShopNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-business" color={color} />
          ),
        }}
      />

      {/* cart tab */}
      <BottomTab.Screen
        name="Cart"
        component={TabCartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-cart" color={color} />
          ),
        }}
      />

      {/* user tab */}
      <BottomTab.Screen
        name="User"
        component={TabUserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Add stack for each tab
const TabShopStack = createStackNavigator<TabShopParamList>();
const TabCartStack = createStackNavigator<TabCartParamList>();
const TabUserStack = createStackNavigator<TabUserParamList>();

function TabShopNavigator() {
  return (
    <TabShopStack.Navigator>
      <TabShopStack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerTitle: "Products" }}
      />
    </TabShopStack.Navigator>
  );
}

function TabCartNavigator() {
  return (
    <TabCartStack.Navigator>
      <TabCartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: "Cart" }}
      />
    </TabCartStack.Navigator>
  );
}

function TabUserNavigator() {
  return (
    <TabUserStack.Navigator>
      <TabUserStack.Screen
        name="User"
        component={UserScreen}
        options={{ headerTitle: "User" }}
      />
    </TabUserStack.Navigator>
  );
}
