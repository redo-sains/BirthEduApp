/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TouchableOpacityBase,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {flex, color} from '../Style';

const SignButton: () => node = ({navigation, title, theme}) => {
  const [Theme, setTheme] = useState(theme);
  return (
    <TouchableOpacity
      onPress={navigation}
      style={[
        compStyle.buttonStyle,
        {
          backgroundColor:
            theme == 'first' ? color.mainColor.color : color.secondColor.color,
          borderWidth: theme == 'first' ? 0 : 1,
          borderColor: '#B1B1B1',
        },
      ]}>
      <View>
        <Text
          style={[
            compStyle.textStyle,
            {color: theme == 'first' ? '#FFFFFF' : '#B1B1B1'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const compStyle = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    paddingVertical: 14,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});

export default SignButton;
