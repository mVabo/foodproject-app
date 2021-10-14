import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'

const RestaurantCard = ({ restaurant, height = 175, margin = 5 }) => {
  return (
    <View style={[styles.container, { height, marginVertical: margin }]}>
      <View style={styles.label}>
        <Text style={{ color: colors.white }}>Open</Text>
      </View>
      <Image source={restaurant.image} style={styles.headerImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameTag}>{restaurant.name}</Text>
        <Text style={styles.addressTag}>{restaurant.address}</Text>
      </View>
    </View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: -2
    }
  },
  label: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 12,
    zIndex: 100
  },
  headerImage: {
    height: '65%',
    width: '100%'
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: '35%',
    justifyContent: 'space-evenly'
  },
  nameTag: {
    fontWeight: '600'
  },
  addressTag: {
    fontWeight: '300'
  }
})
