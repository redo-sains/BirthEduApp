/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export const compStyle = StyleSheet.create({
  inputBox: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inDateBox: {
    textAlign: 'center',
  },
  containerIn: {
    justifyContent: 'space-around',
    width: '70%',
  },
  inLabel: {
    fontFamily: 'Roboto-Bold',
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  inDateLabel: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  fontFamily: {
    fontFamily: 'Roboto-Bold',
  },
});

export const fontFamily = {
  main: {
    fontFamily: 'Roboto-Bold',
  },
};

export const color = StyleSheet.create({
  main: {
    backgroundColor: '#00BFFF',
  },
  mainColor: {
    color: '#00BFFF',
  },
  second: {
    backgroundColor: '#FFFFFF',
  },
  secondColor: {
    color: '#FFFFFF',
  },
});

export const flex = StyleSheet.create({
  f: {
    flex: 1,
  },
  v75: {
    flex: 0.75,
  },
  v50: {
    flex: 0.5,
  },
  v25: {
    flex: 0.25,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
