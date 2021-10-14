import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import moment from 'moment'

const OfferCard = ({ height = 150, width = 125, backgroundColor = colors.palette.primary, offer, margin = 5 }) => {
  const date = new Date;

  const iconDimensions = height * 0.5;
  const dur = moment.duration(moment().diff(offer.expiry));

  return (
    <View style={[styles.container, { height, width, backgroundColor, margin }]}>
      <View style={[styles.iconContainer, { height: iconDimensions, width: iconDimensions, borderRadius: iconDimensions / 2 }]}>
        <Text style={styles.iconStyle}>{offer.icon}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{offer.price} NOK</Text>
        <Text style={styles.expiry}>EXPIRES IN {Math.floor(dur.minutes())}:{Math.floor(dur.seconds())}</Text>
      </View>
    </View>
  )
}

export default OfferCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: {
    fontSize: 35
  },
  infoContainer: {

  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: colors.black
  },
  expiry: {
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    color: colors.black
  }
})
