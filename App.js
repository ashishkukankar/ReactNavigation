/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Profile from './screens/Profile';

const stack = createNativeStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='HomeScreen' component={HomeScreen} />
        <stack.Screen name='Profile' component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
