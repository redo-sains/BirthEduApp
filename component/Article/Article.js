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

import {flex, color} from '../Style';

const Article: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} translucent={true} />
      <Text>Article</Text>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({});

export default Article;
