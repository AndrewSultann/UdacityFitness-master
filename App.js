import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {purple, white, tintColor} from './utils/colors'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants'


function UdaciStatusBar(backgroundColor, ...props){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <History />
        </View>
      </Provider>
    )
  }
}

export default App