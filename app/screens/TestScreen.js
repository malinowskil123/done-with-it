import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from '../assets/components/AppText/AppText'

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      {/* <View style={styles.box}></View> */}
      {/* <Text style={styles.text}>
        I love React Native, This my first React Native App, Here's more text!
      </Text> */}
      {/* <MaterialCommunityIcons name='email' size={60} color='dodgerblue' /> */}
      <AppText>React Native</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  circle: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
    // marginRight: 50,
  },
  box: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    //  ios shadow properties
    shadowColor: 'gray',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    // shadowRadius: 10,

    // android not that visiable
    elevation: 20,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Robato',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'tomato',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 50,
  },
})
