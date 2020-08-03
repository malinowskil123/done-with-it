import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default function Button({ children, style }) {
  return (
    <View style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  )
}
