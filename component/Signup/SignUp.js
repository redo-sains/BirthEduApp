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
import SignButton from '../SignComp/SignButton';
import {flex, color} from '../Style';
import InputContainer from './component/InputContainer';

const SignUp: () => node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      <StatusBar animated={true} translucent={true} />
      <View style={[flex.f, color.second, {position: 'relative'}]}>
        <View style={[compStyle.loginBox]}>
          {/* <View style={[{marginBottom: 22}]}>
            
            <Text style={[color.mainColor, {textAlign: 'right'}]}>
              Lupa Password?
            </Text>
          </View> */}
          <InputContainer />
          <View>
            <SignButton title="Sign Up" theme="first" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#E8E8E8'}} />
              <View>
                <Text
                  style={{width: 50, textAlign: 'center', color: '#B1B1B1'}}>
                  atau
                </Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#E8E8E8'}} />
            </View>
            <SignButton
              navigation={() => {
                navigation.navigate('SignIn');
              }}
              title="Sign In"
              theme="second"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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

export default SignUp;
