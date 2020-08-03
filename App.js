import React from 'react'
import { View } from 'react-native'
import Card from './app/components/Card/Card'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  return <ViewImageScreen />
  // return <WelcomeScreen />
  // return (
  //   <View
  //     style={{
  //       backgroundColor: '#f8f4f4',
  //       padding: 20,
  //       paddingTop: 100,
  //     }}
  //   >
  //     <Card
  //       title='red jacket for Sale!'
  //       subTitle='$100'
  //       image={require('./app/assets/jacket.jpg')}
  //     />
  //     <Card
  //       title='couch in great condition'
  //       subTitle='$900'
  //       image={require('./app/assets/couch.jpg')}
  //     />
  //   </View>
  // )
}
