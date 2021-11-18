import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import DirectionsTab from '../components/restaurantTabs/DirectionsTab'
import InfoTab from '../components/restaurantTabs/InfoTab'
import colors from '../config/colors'
import Constants from 'expo-constants'
import { IconButton } from 'react-native-paper'
import OrderCard from '../components/OrderCard';
import orders from '../dummydata/orders';
import { nothing } from 'immer'

export const OrderScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerTag}>My Orders</Text>
                    <Text style={styles.headerSub}>You have {orders.length} active order(s)</Text>
                </View>
            </View>
            <View style={styles.container}>
                    <FlatList 
                        marginHorizontal = {10}
                        data={orders}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {
                        return <OrderCard order={item} onPress={() => null} />
                        }}
                    />
            </View>
        </View>
    )

}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight
    },
    header: {
      marginVertical: 10,
      marginHorizontal: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerLeft: {
  
    },
    headerRight: {
  
    },
    headerTag: {
      fontWeight: '500',
      fontSize: 24
    },
    headerSub: { 
      fontWeight: '300',
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.5)'
    }
  })