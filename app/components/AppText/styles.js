import { StyleSheet, Platform } from 'react-native'
export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.os === 'android' ? 'Robato' : 'Avenir',
  },
})
