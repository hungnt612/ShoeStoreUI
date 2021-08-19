/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';
import {Svg, Polygon} from 'react-native-svg';
import {PickItem} from '../redux/action/ActionWItem';
import store from '../redux/store';
import {useSelector} from 'react-redux';
const RecentlyViewedSection = (item, index) => {
  const pickItem = () => {
    // setSelectedItem((selectedItem = {item}));
    // PickItem({item});
    // console.log(selectedItem);
    store.dispatch(PickItem(item));
    // store.dispatch(AddToBag(true));
  };
  return (
    <TouchableOpacity
      style={{flex: 1, flexDirection: 'row'}}
      onPress={() => {
        pickItem();
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{width: 130, height: 100}}
        />
      </View>
      <View
        style={{
          flex: 1.3,
          marginLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.name}</Text>
        <Text style={{color: COLORS.black, ...FONTS.h3}}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cunstomShadow: {
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
export default RecentlyViewedSection;
