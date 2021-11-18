import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import routes from './routes';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantNavigator from './RestaurantNavigator';
import OrderScreen from '../screens/OrderScreen';
import MapNavigator from './MapNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName={routes.DISCOVERY}
  >
    <Tab.Screen 
      name={routes.DISCOVERY}
      component={RestaurantNavigator}
      options={{ 
        headerShown: false,
        tabBarIcon: ({ size }) => <MaterialCommunityIcons name="silverware-fork-knife" color={colors.black} size={size} />
      }}
    />
    <Tab.Screen 
      name={routes.MAP_DISCOVERY}
      component={MapNavigator}
      options={{ 
        headerShown: false,
        tabBarIcon: ({ size }) => <MaterialCommunityIcons name="map-marker-outline" color={colors.black} size={size} />
      }}
    />
    <Tab.Screen 
      name={routes.ORDER}
      component={OrderScreen}
      options={{ 
        headerShown: false,
        tabBarIcon: ({ size }) => <MaterialCommunityIcons name="home-variant-outline" color={colors.black} size={size} />
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;