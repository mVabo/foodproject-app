import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

const DiscoveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  )
}

export default DiscoveryScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  }
})
