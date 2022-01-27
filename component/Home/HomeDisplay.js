/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderDisplay from '../header/headerDisplay';
import HeaderApp from '../header/headerDisplay';
import {flex, color} from '../Style';

const Home: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f, color.main]}>
      <ScrollView contentContainerStyle={[flex.f, color.main, {}]}>
        <HeaderDisplay navigation={navigation} />
        <View
          style={[
            color.main,
            {
              height: StatusBar.currentHeight,
            },
          ]}></View>
        <View
          style={[
            {
              flex: 0.45,
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'relative',
            },
          ]}>
          <View
            style={{
              width: '72%',
              marginBottom: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 26,
                fontFamily: 'Roboto-Bold',
              }}>
              selamat datang
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 26,
                fontFamily: 'Roboto-Bold',
              }}>
              BUNDA
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 23,
                fontFamily: 'Roboto-Bold',
              }}>
              “saat ini usia kehamilan Bunda 06 Minggu 04 Hari”
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 24,
                fontFamily: 'Roboto-Bold',
              }}>
              Mari persiapakan persalinan aman, nyaman, dan tenang
            </Text>
          </View>
        </View>
        <View
          style={[
            color.second,
            {flex: 0.55, flexDirection: 'row', justifyContent: 'space-evenly'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HPHT');
            }}
            style={[compStyle.menuBox, flex.center]}>
            <View style={[flex.center, {width: '100%'}]}>
              <MaterialIcons
                name="self-improvement"
                size={90}
                color="#479EE5"
              />
              <Text style={[{width: '70%', textAlign: 'center', fontSize: 10}]}>
                Latihan Fisik, Mental, dan Spiritual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScoreDetails');
            }}
            style={[compStyle.menuBox, flex.center]}>
            <View style={[flex.center, {width: '100%'}]}>
              <MaterialComunityIcons
                name="school"
                size={90}
                color={'#479EE5'}
              />
              <Text style={[{width: '70%', textAlign: 'center', fontSize: 10}]}>
                Edukasi Persiapan Persalinan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({
  menuBox: {
    width: 150,
    height: 170,
    top: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 2,
    elevation: 10,
  },
});

export default Home;
