import React from 'react'

const OfferCard = ({ order, height = 95, margin = 5, onPress }) => {
    return (
      <TouchableOpacity style={[styles.container, { height, marginVertical: margin }]} onPress={onPress}>
        <Image source={order.image} style={styles.headerImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameTag}>{order.name}</Text>
          <Text style={styles.addressTag}>{order.restraunt} - {order.price} NOK</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  export default OfferCard