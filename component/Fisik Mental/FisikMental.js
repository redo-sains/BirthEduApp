/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacityBase,
  StatusBar,
} from 'react-native';
import HeaderDisplay from '../header/headerDisplay';

import {flex, color} from '../Style';

const FisikMental: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} translucent={true} />
      <View style={[flex.f, color.main, {justifyContent: 'flex-end'}]}>
        <HeaderDisplay navigation={navigation} />
        <View
          style={[
            {justifyContent: 'flex-end', flex: 0.7, backgroundColor: 'white'},
          ]}></View>
      </View>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({});

export default FisikMental;
