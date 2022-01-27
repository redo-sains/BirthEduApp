/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {flex, color} from '../Style';
import HeaderApp from '../header/headerDisplay';
import ScoreCard from './component/Card';

const ScoreDetails: () => Node = ({navigation}) => {
  return (
    <SafeAreaView style={[flex.f]}>
      {/* <StatusBar animated={true} backgroundColor={color.main.backgroundColor} /> */}
      <View style={[flex.f, color.main, {position: 'relative'}]}>
        <HeaderApp navigation={navigation} />
        <View style={[{alignItems: 'center', marginTop: 100}]}>
          <View style={[compStyle.cardContainer]}>
            <ScoreCard title="Pre-Test" score1="140" score2="140" />
            <ScoreCard
              title="Post-Test"
              score1="180"
              score2="180"
              test={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const compStyle = StyleSheet.create({
  cardContainer: {
    width: '80%',
    zIndex: 0,
  },
});

export default ScoreDetails;
