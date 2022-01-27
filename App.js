/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HPHT from './component/input HPHT/InputHpht';
import Home from './component/Home/HomeDisplay';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/Signup/SignUp';
import ScoreDetails from './component/Score Details/ScoreDetails';
import Latihan from './component/Latihan/Latihan';
import Article from './component/Article/Article';
import FisikMental from './component/Fisik Mental/FisikMental';
import Education from './component/Education/Education';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="HPHT"
          component={HPHT}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScoreDetails"
          component={ScoreDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Education"
          component={Education}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Latihan"
          component={Latihan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FisikMental"
          component={FisikMental}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Efikasi" component={Efikasi} />
        <Stack.Screen name="Kontrol" component={Kontrol} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
