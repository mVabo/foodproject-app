import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import routes from './routes';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantNavigator from './RestaurantNavigator';
import OrderScreen from '../screens/OrderScreen';
import MapNavigator from './MapNavigator';

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
    <Tab.Screen 
      name={routes.MAP_DISCOVERY}
      component={MapNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen 
      name={routes.ORDER}
      component={OrderScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainNavigator;