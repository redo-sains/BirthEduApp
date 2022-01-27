/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {color} from '../../Style';
import SignInput from '../../SignComp/SignInput';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputContainer: () => node = () => {
  const [noHp, setNoHp] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  return (
    <View style={[{marginBottom: 22}]}>
      <SignInput
        state={noHp}
        setState={setNoHp}
        placeholder="08XXXXXXXX"
        iconFront={<MaterialIcon name="call" size={14} color={'#B1B1B1'} />}
        iconBack={<MaterialIcon name="done" size={14} color={'#B1B1B1'} />}
      />
      <SignInput
        state={password}
        setState={setPassword}
        placeholder="Password"
        secure={!reveal}
        iconFront={
          <MaterialComunityIcon name="lock" size={14} color={'#B1B1B1'} />
        }
        iconBack={
          <TouchableWithoutFeedback
            onPress={() => {
              setReveal(!reveal);
            }}>
            <MaterialComunityIcon
              name="eye-off-outline"
              size={14}
              color={'#B1B1B1'}
            />
          </TouchableWithoutFeedback>
        }
      />
      <SignInput
        state={password2}
        setState={setPassword2}
        placeholder="Verifikasi Password"
        iconFront={
          <MaterialComunityIcon name="lock-check" size={14} color={'#B1B1B1'} />
        }
        secure={!reveal2}
        iconBack={
          <TouchableWithoutFeedback
            onPress={() => {
              setReveal2(!reveal2);
            }}>
            <MaterialComunityIcon
              name="eye-off-outline"
              size={14}
              color={'#B1B1B1'}
            />
          </TouchableWithoutFeedback>
        }
      />
      <Text style={[color.mainColor, {textAlign: 'right'}]}>
        Lupa Password?
      </Text>
    </View>
  );
};

export default InputContainer;
