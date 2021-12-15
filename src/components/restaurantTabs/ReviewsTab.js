import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReviewCard from '../ReviewCard';

const ReviewsTab = ({ restaurant }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {restaurant.reviews.map((item) => (
        <ReviewCard review={item} />
      ))}
    </View>
  );
}

export default ReviewsTab

const styles = StyleSheet.create({

})
