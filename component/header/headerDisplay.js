/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {fontFamily, color} from '../Style';
import UiIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderDisplay: () => Node = ({navigation}) => {
  const [menu, setMenu] = useState(false);

  const menuList = [
    {title: 'Home', navigate: 'Home'},
    {
      title: 'Edukasi Persiapan Persalinan',
      navigate: 'Education',
    },
    {
      title: 'Latihan Fisik, Mental, dan Spriritual',
      navigate: 'FisikMental',
    },
    {title: 'Kontrol Diri Test', navigate: 'Home'},
    {title: 'Efikasi Diri Test', navigate: 'Home'},
    {title: 'Log Out', navigate: 'SignIn'},
  ];
  return (
    <View style={[compStyle.headerContainer]}>
      <StatusBar
        animated={true}
        backgroundColor="rgba(0,0,0,0)"
        translucent={true}
      />
      {menu && (
        <View style={[compStyle.navContainer]}>
          <TouchableWithoutFeedback
            onPress={() => {
              setMenu(false);
            }}>
            <View style={[{flex: 0.3}]}></View>
          </TouchableWithoutFeedback>
          <View style={[compStyle.navBarContainer]}>
            <View style={[{marginHorizontal: 24, marginTop: 24}]}>
              <View style={[{flexDirection: 'row', marginBottom: 14}]}>
                <UiIcon
                  name="account-circle"
                  size={74}
                  color={color.main.backgroundColor}
                />
                <View style={[{justifyContent: 'center'}]}>
                  <Text style={[{color: color.main.backgroundColor}]}>
                    Nama Bunda
                  </Text>
                  <Text style={[{color: color.main.backgroundColor}]}>
                    Aplikasi Loading...
                  </Text>
                </View>
              </View>
              <View style={[color.main, compStyle.scoreContainer]}>
                <View>
                  <Text style={[color.secondColor]}>
                    {'Efikasi diri\t: tinggi'}
                  </Text>
                  <Text style={[color.secondColor]}>
                    {'Kontrol diri\t: tinggi'}
                  </Text>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setMenu(!menu);
                      navigation.navigate('ScoreDetails');
                    }}>
                    <Text
                      style={[
                        color.secondColor,
                        {
                          textAlign: 'right',
                          fontSize: 12,
                        },
                      ]}>
                      Details
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={[{marginLeft: 14}]}>
                {menuList.map(value => {
                  return (
                    <TouchableNativeFeedback
                      key={value.title}
                      onPress={() => navigation.navigate(value.navigate)}>
                      <Text
                        style={[
                          {
                            color: color.main.backgroundColor,
                            marginBottom: 36,
                            fontSize: 20,
                          },
                        ]}>
                        {value.title}
                      </Text>
                    </TouchableNativeFeedback>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={[compStyle.headerBarContainer]}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="left"
              size={20}
              style={[{paddingRight: 10, paddingLeft: 20}]}
              color={color.second.backgroundColor}
            />
          </TouchableWithoutFeedback>
          <View>
            <Text
              style={[
                fontFamily.main,
                {color: color.second.backgroundColor, fontSize: 16},
              ]}>
              Nama Bunda
            </Text>
            <Text
              style={[
                fontFamily.main,
                {color: color.second.backgroundColor, fontSize: 16},
              ]}>
              Aplikasi Loading...
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setMenu(!menu);
            }}
            style={[compStyle.profileCircle]}>
            <UiIcon name="account-circle" size={35} color={'#B1B1B1'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const compStyle = StyleSheet.create({
  headerContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  navContainer: {
    flex: 1,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
  },
  navBarContainer: {
    ...color.second,
    flex: 0.7,
    paddingTop: StatusBar.currentHeight,
  },
  scoreContainer: {
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 18,
  },
  profileCircle: {
    ...color.second,
    borderRadius: 1000,
    padding: 3,
  },
  headerBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
    padding: 20,
    paddingLeft: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default HeaderDisplay;
