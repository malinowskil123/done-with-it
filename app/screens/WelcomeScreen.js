import React from 'react'
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native'
import Button from '../components/Button/Button'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.heading}>sell what you don't deed</Text>
      </View>
      <Button style={styles.login}>login</Button>
      <Button style={styles.register}>register</Button>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logoContainer: {
    // absolute
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  login: {
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '600',
    paddingTop: 20,
  },
  register: {
    backgroundColor: colors.secondary,
  },
})
