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
import AntIcon from 'react-native-vector-icons/AntDesign';
import {color, flex, compStyle} from '../Style';
import Header from '../header/headerDisplay';
import {
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityBase,
  useColorScheme,
  View,
} from 'react-native';

const InputHPHT: () => Node = ({navigation}) => {
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [hari, setHari] = useState('');
  const [bulan, setBulan] = useState('');
  const [tahun, setTahun] = useState('');

  const inHandling = (val, handlingLength, rangeProps = {range: false}) => {
    const {range, min, max} = rangeProps;
    handlingLength = handlingLength + 1;
    const lengthValid = val.length < handlingLength ? true : false;
    if (range) {
      const a = +val;
      const rangeValid = a < max + 1 ? (min - 1 < a ? true : false) : false;
      return rangeValid && lengthValid == true ? true : false;
    }

    return lengthValid && !isNaN(val) ? true : false;
  };

  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} backgroundColor={color.main.backgroundColor} />
      <ScrollView
        contentContainerStyle={[flex.f, color.main, {position: 'relative'}]}>
        <Header navigation={navigation} />
        <View style={[flex.f, flex.center]}>
          <View style={[compStyle.containerIn]}>
            <View>
              <Text
                style={[
                  compStyle.inLabel,
                  flex.center,
                  {textTransform: 'uppercase'},
                ]}>
                nama
              </Text>
              <TextInput
                style={[compStyle.inputBox]}
                placeholder="contoh olivia"
                value={nama}
                onChangeText={e => {
                  setNama(e);
                }}
              />
            </View>
            <View style={{paddingTop: 28}}>
              <Text style={[compStyle.inLabel, {textTransform: 'uppercase'}]}>
                nik
              </Text>
              <TextInput
                style={[compStyle.inputBox]}
                placeholder="0123XXXXXXXX"
                value={nik}
                onChangeText={e => inHandling(e, 16) && setNik(e)}
              />
            </View>
            <View style={{paddingTop: 28}}>
              <Text style={[compStyle.inLabel, {textTransform: 'capitalize'}]}>
                hari pertama haid terakhir
                <Text style={[{textTransform: 'uppercase'}]}> (HPHT)</Text>
              </Text>
              <View style={[{flexDirection: 'row'}]}>
                <View style={[flex.f, {marginRight: 16}]}>
                  <Text style={[compStyle.inDateLabel]}>hari</Text>
                  <TextInput
                    style={[compStyle.inputBox, compStyle.inDateBox]}
                    placeholder="XX"
                    value={hari}
                    onChangeText={e =>
                      inHandling(e, 2, {range: true, min: 0, max: 31}) &&
                      setHari(e)
                    }
                  />
                </View>
                <View style={[flex.f, {marginRight: 16}]}>
                  <Text style={[compStyle.inDateLabel]}>bulan</Text>
                  <TextInput
                    style={[compStyle.inputBox, compStyle.inDateBox]}
                    placeholder="XX"
                    value={bulan}
                    onChangeText={e =>
                      inHandling(e, 2, {range: true, min: 0, max: 12}) &&
                      setBulan(e)
                    }
                  />
                </View>
                <View style={[flex.f]}>
                  <Text style={[compStyle.inDateLabel]}>tahun</Text>
                  <TextInput
                    style={[compStyle.inputBox, compStyle.inDateBox]}
                    placeholder="XXXX"
                    value={tahun}
                    onChangeText={e =>
                      inHandling(e, 4, {range: true, min: 0, max: 3000}) &&
                      setTahun(e)
                    }
                  />
                </View>
              </View>
              <View style={{paddingTop: 28}}>
                <View style={[flex.center]}>
                  <TouchableOpacity>
                    <AntIcon name="rightsquareo" color="#FFFFFF" size={65} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputHPHT;
