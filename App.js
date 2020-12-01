import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import BookTransctionScreen from './screens/BookTransctionScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
return (<AppContainer></AppContainer>)
}
}
 
const TabNavigator = createBottomTabNavigator({
  'BARCODE SCANNER':{ screen: BookTransctionScreen,}

})

const AppContainer = createAppContainer(TabNavigator)