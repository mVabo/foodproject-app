import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import MapDiscoveryScreen from "../screens/MapDiscoveryScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.DISCOVERY}
  >
    <Stack.Screen 
      name={routes.MAP_DISCOVERY}
      component={MapDiscoveryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name={routes.RESTAURANT}
      component={RestaurantScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MapNavigator;