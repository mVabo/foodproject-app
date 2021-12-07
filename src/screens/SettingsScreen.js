import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { Avatar, Divider } from 'react-native-paper'
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 24, fontWeight: 'bold' }}>Settings</Text>
      <View style={styles.profileCard}>
        <Text style={{ margin: 10, fontSize: 22, fontWeight: 'bold' }}>Dwayne Johnson</Text>
        <Avatar.Image source={require('../../assets/avatar.jpg')} />
      </View>
      <View style={styles.settingsSection}>
        <Text style={styles.sectionHeader}>Profile</Text>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Update Profile Picture</Text>
        </TouchableOpacity>
        <Divider style={{backgroundColor: colors.black}}/>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Update Email</Text>
        </TouchableOpacity>
        <Divider style={{backgroundColor: colors.black}}/>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Update Name</Text>  
        </TouchableOpacity>
        <Divider style={{backgroundColor: colors.black}}/>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Update Address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingsSection}>
        <Text style={styles.sectionHeader}>Billing</Text>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Billing Address</Text>
        </TouchableOpacity>
        <Divider style={{backgroundColor: colors.black}}/>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Add Card</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingsSection}>
        <Text style={styles.sectionHeader}>Privacy</Text>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Terms of Service</Text>
        </TouchableOpacity>
        <Divider style={{backgroundColor: colors.black}}/>
        <TouchableOpacity style={styles.sectionOption}>
          <Text style={{ color: colors.white }}>Privacy Notice</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: Constants.statusBarHeight + 10,
  },
  profileCard: {
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20
  },
  settingsSection: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: colors.palette.primary,
    borderRadius: 20,
    marginVertical: 10
  },
  sectionOption: {
    padding: 15
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
    color: colors.white
  }
})
