/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import PickItem from '../context/PickItemReducer';
import CustomModal from './CustomModal';
import {StoreContext} from '../context/Store';
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';
import {Svg, Polygon} from 'react-native-svg';

type CustomProperties = {
  item: any;
  index: any;
};

const TrendingSection: React.FC<CustomProperties> = ({item, index}) => {
  // const selectedItem = useContext(StoreContext);

  var customStyle = {};
  if (index == 0) {
    customStyle = {marginLeft: SIZES.padding};
  }
  const pickItem = () => {
    // setSelectedItem((selectedItem = {item}));
    // PickItem({item});
    // console.log(selectedItem);
  };
  return (
    <TouchableOpacity
      style={{
        height: 240,
        width: 180,
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
        // backgroundColor: COLORS.lightGray,
        ...customStyle,
      }}
      onPress={() => {
        pickItem();
      }}>
      <Text style={{color: COLORS.gray, ...FONTS.h5}}>#{item.type}</Text>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: SIZES.base,
            borderRadius: 10,
            marginRight: SIZES.padding,
            backgroundColor: item.bgColor,
            paddingLeft: SIZES.radius,
            paddingRight: SIZES.padding,
            paddingBottom: SIZES.radius,
          },
          styles.customShadow,
        ]}>
        <View style={{height: '35%', justifyContent: 'space-between'}}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>{item.price}</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 27,
          right: 0,
          width: '95%',
          height: '100%',
        }}>
        <Svg height="100%" width="100%">
          <Polygon points="0,0 160,0 160,80" fill={COLORS.white} />
        </Svg>
      </View>
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 50,
          right: 0,
          width: '98%',
          height: 80,
          transform: [{rotate: '-15deg'}],
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 7,
  },
});
export default TrendingSection;
