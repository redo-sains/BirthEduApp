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

const Latihan: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} translucent={true} />
      <HeaderDisplay navigation={navigation} />
      <Text>Latihan</Text>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({});

export default Latihan;
