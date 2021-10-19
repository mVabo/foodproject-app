import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const RestaurantNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.DISCOVERY}
  >
    <Stack.Screen 
      name={routes.DISCOVERY}
      component={DiscoveryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name={routes.RESTAURANT}
      component={RestaurantScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RestaurantNavigator;