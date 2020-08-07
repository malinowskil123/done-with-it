import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='close' size={30} style={styles.closeIcon} />
      <MaterialCommunityIcons
        name='trash-can-outline'
        size={30}
        style={styles.deleteIcon}
      />
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
    color: colors.white,
  },
  deleteIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    color: colors.white,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
