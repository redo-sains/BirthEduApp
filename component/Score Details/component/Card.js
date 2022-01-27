/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {color, flex} from '../../Style';

const Card: () => node = ({
  navigation,
  title,
  score1,
  score2,
  test = false,
}) => {
  return (
    <View style={[compStyle.detailsCard]}>
      <View style={[compStyle.cardContent, flex.f]}>
        <Text
          style={[
            {
              color: color.main.backgroundColor,
              fontFamily: 'Roboto-Bold',
              fontSize: 18,
            },
          ]}>
          {title}
        </Text>
        <View style={[compStyle.scoreContainer]}>
          <Text style={[compStyle.scoreText]}>
            {'Efikasi diri \t\t: ' + score1}
          </Text>
          <Text style={[compStyle.scoreText]}>
            {'Kontrol diri \t: ' + score2}
          </Text>
        </View>
        {test && (
          <TouchableWithoutFeedback>
            <View
              style={[
                {
                  flexDirection: 'row',
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                  marginBottom: 2,
                  bottom: 0,
                  right: 0,
                },
              ]}>
              <Text
                style={[
                  {
                    color: color.main.backgroundColor,
                    fontSize: 12,
                  },
                ]}>
                Ambil Test Lagi
              </Text>
              <AntIcon
                name="right"
                size={20}
                style={[
                  {
                    paddingLeft: 2,
                  },
                ]}
                color={color.main.backgroundColor}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

const compStyle = StyleSheet.create({
  detailsCard: {
    ...color.second,
    borderRadius: 10,
    marginBottom: 54,
    height: 188,
  },
  cardContent: {
    marginHorizontal: 14,
    marginVertical: 12,
  },
  scoreContainer: {
    marginTop: 22,
    marginLeft: 12,
  },
  scoreText: {
    color: color.main.backgroundColor,
    fontFamily: 'Roboto-Medium',
  },
});

export default Card;
