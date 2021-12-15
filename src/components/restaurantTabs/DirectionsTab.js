import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Button } from 'react-native-paper'
import colors from '../../config/colors'

const DirectionsTab = ({ restaurant }) => {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: restaurant.location.latitude,
          longitude: restaurant.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation
        provider="google"
        style={styles.mapBox}
      >
        <Marker 
          coordinate={restaurant.location}
          key={restaurant.id.toString()}
        />
      </MapView>
      <Button style={styles.button} mode='contained' labelStyle={{ fontWeight: 'bold' }}>
        10 Minutes drive
      </Button>
    </View>
  )
}

export default DirectionsTab

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  mapBox: {
    height: '65%',
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
    margin: 10
  },
  button: {
    backgroundColor: colors.palette.primary,
    margin: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center'
  }
})
