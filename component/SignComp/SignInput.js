/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {color} from '../Style';

const SignInput: () => node = ({
  state,
  setState,
  placeholder,
  iconFront,
  iconBack,
  secure = false,
}) => {
  return (
    <View
      style={{
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={[{paddingRight: 5}]}>{iconFront}</View>
      <TextInput
        value={state}
        onChangeText={text => {
          setState(text);
        }}
        style={{flex: 1}}
        placeholder={placeholder}
        placeholderTextColor={compStyle.mainColor.backgroundColor}
        secureTextEntry={secure}
      />
      <View style={[{paddingLeft: 5}]}>{iconBack}</View>
    </View>
  );
};

const compStyle = StyleSheet.create({
  mainColor: {
    backgroundColor: '#B1B1B1',
  },
  loginBox: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 35,
  },
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 10,
    ...color.main,
  },
});

export default SignInput;
