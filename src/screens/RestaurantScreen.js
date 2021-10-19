import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DirectionsTab from '../components/restaurantTabs/DirectionsTab'
import InfoTab from '../components/restaurantTabs/InfoTab'
import MenuTab from '../components/restaurantTabs/MenuTab'
import ReviewsTab from '../components/restaurantTabs/ReviewsTab'
import colors from '../config/colors'
import restaurant from '../dummydata/restaurant'
import Constants from 'expo-constants'
import { IconButton } from 'react-native-paper'

const tabs = [
  'Info',
  'Menu',
  'Directions',
  'Reviews'
]

const RestaurantScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', paddingTop: Constants.statusBarHeight, position: 'absolute', zIndex: 100 }}>
        <IconButton icon="arrow-left" onPress={() => navigation.goBack()} color={colors.white} />
      </View>
      <View style={styles.headerImage}>
        <Image source={restaurant.image} style={{ width: '100%', height: 300 }} />
      </View>
      <View style={styles.body}>
        <View style={styles.tabHeader}>
          <Text style={styles.headerText}>{restaurant.name}</Text>
          <Text style={styles.headerStars}>{'⭐'.repeat(restaurant.stars)} {`${restaurant.stars.toFixed(1)} (${restaurant.reviews.length} reviews)`}</Text>
        </View>
        <View style={styles.tabNav}>
          {tabs.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setActiveTab(item)} key={index}>
                <Text style={[item == activeTab && {color: '#48E2EF'}, styles.tabItem]}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.tabBody}>
          {activeTab === tabs[0] && <InfoTab restaurant={restaurant} />}
          {activeTab === tabs[1] && <MenuTab restaurant={restaurant} />}
          {activeTab === tabs[2] && <DirectionsTab restaurant={restaurant} />}
          {activeTab === tabs[3] && <ReviewsTab restaurant={restaurant} />}
        </View>
      </View>
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  headerImage: {
    width: '100%',
    top: 0,
    position: 'absolute'
  },
  body: {
    width: '100%',
    height: '80%',
    top: '20%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingTop: 10
  },
  tabHeader: {

  },
  tabNav: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  tabItem: {
    fontWeight: '600',
    fontSize: 15
  },
  tabBody: {
  },
  headerText: {
    fontWeight: '500',
    fontSize: 24,
    padding: 10
  },
  headerStars: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'rgba(0, 0, 0, 0.3)'
  }
})
