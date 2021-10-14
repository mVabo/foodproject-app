import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from 'expo-constants'
import offers from '../dummydata/offers'
import OfferCard from '../components/OfferCard'
import restaurants from '../dummydata/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { Avatar, Button, IconButton, Searchbar } from 'react-native-paper'
import colors from '../config/colors'
import user from '../slices/user'

const DiscoveryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const openSettings = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTag}>Hello</Text>
          <Text style={styles.headerSub}>See something you like?</Text>
        </View>
        <View style={styles.headerRight}>
          <Avatar.Image source={require('../../assets/avatar.jpg')} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Searchbar 
          placeholder="Search for restaurants"
          onChangeText={newText => setSearchQuery(newText)}
          value={searchQuery}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={openSettings} style={styles.searchSettings}>
          <IconButton 
            icon="cog-outline"
            color={colors.black}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.offers}>
        <Text style={styles.listHeader}>Special Offers 🔥</Text>
        <FlatList 
          data={offers}
          keyExtractor={item => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => {return <View style={{ width: 10 }} />}}
          renderItem={({item, index}) => {
            return <OfferCard offer={item} margin={0} />
          }}
        />
      </View>
      <View style={styles.restaurants}>
        <Text style={styles.listHeader}>Nearby Restaurants</Text>
        <FlatList 
          data={restaurants}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return <RestaurantCard restaurant={item} />
          }}
        />
      </View>
    </View>
  )
}

export default DiscoveryScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  listHeader: {
    marginHorizontal: 5,
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 20
  },
  searchBar: {
    margin: 10,
    flexDirection: 'row',
    width: 'auto'
  },
  searchSettings: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    marginLeft: 10,
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
    fontSize: 18
  },
  offers: {
    marginHorizontal: 10
  },
  restaurants: {
    marginHorizontal: 10
  }
})
