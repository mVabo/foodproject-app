import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RestaurantScreen from "../screens/RestaurantScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const RestaurantNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.RESTAURANT}
  >
    <Stack.Screen 
      name={routes.RESTAURANT}
      component={RestaurantScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RestaurantNavigator;