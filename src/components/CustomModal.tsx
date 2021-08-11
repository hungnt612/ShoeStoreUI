/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
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
import {BlurView} from '@react-native-community/blur';

type CustomProperties = {
  item: any;
  visible: boolean;
};

const CustomModal: React.FC<CustomProperties> = ({item, visible}) => {
  console.log(item);
  if (item) {
    return (
      <Modal animationType="slide" transparent={true} visible={item}>
        <BlurView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{item.name}</Text>
        </BlurView>
      </Modal>
    );
  } else {
    return null;
  }
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
export default CustomModal;
