import React from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors'


const OrderCard = ({ order, height = 95, margin = 5, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { height, marginVertical: margin }]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={order.image} style={styles.imageContainer} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.orderNameText}>{order.name}</Text>
        <Text style={styles.orderInfoText}>{order.restaurant} - {order.price} NOK</Text>
      </View>
    </TouchableOpacity>
  )
}
  
export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white
  },
  imageContainer: {
    borderRadius: 12,
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.black
  },
  image: {
    height: '100%',
    width: '100%'
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: '100%',
    justifyContent: 'space-evenly'
  },
  orderNameText: {
    fontWeight: '500',
    fontSize: 19,
    textAlign: 'left',
    color: colors.black
  },
  orderInfoText: {
    fontWeight: '300',
    fontSize: 16,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.5)'
  }
})