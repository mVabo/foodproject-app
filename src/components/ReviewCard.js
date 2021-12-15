import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import colors from '../config/colors'

const ReviewCard = ({ review }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{'⭐'.repeat(review.stars)}</Text>
      </View>
      <View>
        <Text>{review.review}</Text>
      </View>
    </View>
  )
}

export default ReviewCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 100,
    width: Dimensions.get('window').width - 20,
    backgroundColor: colors.white,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: -2
    },
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }
})
