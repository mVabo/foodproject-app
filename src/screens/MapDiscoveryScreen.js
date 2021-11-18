import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import restaurants from '../dummydata/restaurants'
import * as Location from 'expo-location'
import { ScrollView } from 'react-native-gesture-handler'
import RestaurantCard from '../components/RestaurantCard'
import { NavigationContainer } from '@react-navigation/native'
import routes from '../navigators/routes'

const MapDiscoveryScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        style={styles.mapBox}
      >
        {restaurants.map((restaurant) => {

          return (
            <Marker 
              coordinate={restaurant.location}
              key={restaurant.id.toString()}
              onPress={() => setActiveRestaurant(restaurant)}
            />
          )
        })}
      </MapView>
      {activeRestaurant && (
        <View style={styles.infoOverlay}>
          <RestaurantCard restaurant={activeRestaurant} onPress={() => navigation.navigate(routes.RESTAURANT)} />
        </View>
      )}
    </View>
  )
}

export default MapDiscoveryScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  mapBox: {
    height: '100%',
    width: '100%'
  },
  infoOverlay: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    padding: 10,
    height: '20%'
  }
})
