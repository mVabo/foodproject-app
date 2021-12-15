import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const InfoTab = ({ restaurant }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text>{restaurant.extendedDescription}</Text>
    </View>
  )
}

export default InfoTab

const styles = StyleSheet.create({})
