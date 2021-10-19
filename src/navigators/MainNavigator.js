import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import routes from './routes';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantNavigator from './RestaurantNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName={routes.DISCOVERY}
  >
    <Tab.Screen 
      name={routes.DISCOVERY}
      component={RestaurantNavigator}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainNavigator;