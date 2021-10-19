import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import colors from '../../config/colors'

const MenuTab = ({ restaurant }) => {

  return (
    <View style={styles.container}>
      {restaurant.menu.map((item, index) => {
        let checked = 'unchecked'

        return (
          <View style={styles.card} key={item.name}>
            <View style={styles.left}>
              <View style={styles.iconContainer}>
                <Text style={{ fontSize: 24 }}>🍣</Text>
              </View>
              <View style={{ marginVertical: 20, justifyContent: 'space-evenly' }}>
                <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.name}</Text>
                <Text>{item.price} NOK</Text>
              </View>
            </View>
            <View style={styles.right}>
              <RadioButton.Item 
                value="selected" 
                status={checked}
                onPress={() => checked = true}
                color={colors.palette.primary}
              />
            </View>    
          </View>  
        )
      })}
    </View>
  )
}

export default MenuTab

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  card: {
    borderRadius: 12,
    height: 100,
    width: 'auto',
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
    alignItems: 'center'
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    height: 75,
    width: 75,
    margin: 12.5,
    backgroundColor: colors.palette.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
