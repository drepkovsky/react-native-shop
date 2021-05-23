import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
  TransitionSpecs,
} from "@react-navigation/stack";
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
import DetailsScreen from "../screens/DetailsScreen";
import { Platform } from "react-native";

// Create basic routing of our route

const Tab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Shop"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        indicatorContainerStyle: {},
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].brand,
        },
        activeTintColor: Colors[colorScheme].brand,
        inactiveTintColor: Colors[colorScheme].disabled,
        style: {
          backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}>
      {/* shop tab */}
      <Tab.Screen
        name="Shop"
        component={TabShopNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-business" color={color} />
          ),
        }}
      />

      {/* cart tab */}
      <Tab.Screen
        name="Cart"
        component={TabCartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-cart" color={color} />
          ),
        }}
      />

      {/* user tab */}
      <Tab.Screen
        name="User"
        component={TabUserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
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
  const colorScheme = useColorScheme();

  const gesture = Platform.OS === "ios" ? "horizontal" : "vertical";

  return (
    <TabShopStack.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors[colorScheme].text,
        headerTitleAlign: "center",
      }}>
      <TabShopStack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTitle: "Products",
          gestureDirection: "horizontal",
        }}
      />
      <TabShopStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          gestureDirection: gesture,
          gestureEnabled: true,
          headerTitle: "Details",
        }}
      />
    </TabShopStack.Navigator>
  );
}

function TabCartNavigator() {
  const colorScheme = useColorScheme();
  return (
    <TabCartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors[colorScheme].text,
        headerTitleAlign: "center",
      }}>
      <TabCartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: "Cart" }}
      />
    </TabCartStack.Navigator>
  );
}

function TabUserNavigator() {
  const colorScheme = useColorScheme();
  return (
    <TabUserStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors[colorScheme].text,
        headerTitleAlign: "center",
      }}>
      <TabUserStack.Screen
        name="User"
        component={UserScreen}
        options={{ headerTitle: "User" }}
      />
    </TabUserStack.Navigator>
  );
}
