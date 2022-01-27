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
  ScrollView,
  StatusBar,
} from 'react-native';
import HeaderDisplay from '../header/headerDisplay';

import {flex, color} from '../Style';

const Education: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} translucent={true} />
      <View style={[flex.f, color.main, {justifyContent: 'flex-end'}]}>
        <HeaderDisplay navigation={navigation} />
        <View style={[{marginHorizontal: 28, marginBottom: 10}]}>
          <Text style={[color.secondColor]}>Edukasi Artikel</Text>
        </View>
        <View style={[{flex: 0.75, backgroundColor: 'white'}]}>
          <ScrollView>
            <View style={{backgroundColor: 'black', height: 1000}}>
              <View style={{backgroundColor: 'red', height: 100}}></View>
              <View style={{backgroundColor: 'white', height: 1000}}></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({});

export default Education;
