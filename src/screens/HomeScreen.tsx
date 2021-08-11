/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Modal,
} from 'react-native';
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';
import TrendingSection from '../components/TrendingSection';
import RecentlyViewedSection from '../components/RecentlyViewedSection';
import {BlurView} from '@react-native-community/blur';
import CustomModal from '../components/CustomModal';
import store from '../redux/store';
import {StoreContext} from '../context/Store';
import {useSelector} from 'react-redux';
import {PickItem, UnPickItem} from '../redux/action/UserAction';
const DATA = [
  {
    id: 0,
    name: 'Nike Air Zoom',
    img: images.nikePegasus36,
    bgColor: '#BF012C',
    type: 'RUNNING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 1,
    name: 'Nike Metcon 5',
    img: images.nikeMetcon5Purple,
    bgColor: '#D39C67',
    type: 'TRAINING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 2,
    name: 'Nike Air Zoom Kobe',
    img: images.nikeZoomKobe1Proto,
    bgColor: '#7052A0',
    type: 'BASKETBALL',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
];

const DATA2 = [
  {
    id: 0,
    name: 'Nike Air Zoom',
    img: images.nikePegasus36,
    bgColor: '#BF012C',
    type: 'RUNNING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 1,
    name: 'Nike Metcon 5',
    img: images.nikeMetcon5Purple,
    bgColor: '#D39C67',
    type: 'TRAINING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 2,
    name: 'Nike Metcon 6',
    img: images.nikeMetcon6,
    bgColor: '#4eaba6',
    type: 'BASKETBALL',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    name: 'Nike Metcon 3',
    img: images.nikeMetcon3,
    bgColor: '#A69285',
    type: 'TRAINING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: 4,
    name: 'Nike Metcon Free',
    img: images.nikeMetconFree,
    bgColor: '#A02E41',
    type: 'TRAINING',
    price: '$176',
    sizes: [5, 6, 7, 8, 9],
  },
];

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [trending, setTrending] = useState(DATA);
  const [recentlyViewed, setRecentlyViewed] = useState(DATA2);
  // const [showAddToBag, setShowAddToBag] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const users = useSelector(PickItem);

  // const [selectedSize, setSelectedSize] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');
  // const {selectedItem, setSelectedItem} = React.useContext(StoreContext);
  // console.log(selectedItem);
  // console.log(trending);
  // const itemOnPress = item => {
  //   console.log(item);
  // };
  // useEffect(() => {
  //   setSelectedItem(store.getState().UserActionReducer);
  //   console.log(selectedItem);
  // }, []);
  if (store.getState().UserActionReducer?.data) {
    console.log(store.getState().UserActionReducer?.isChosing);
  }
  const trendingSectionRender = () => {
    return (
      <View style={{height: 260, marginTop: SIZES.radius}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TrendingSection
                index={index}
                item={item}
                // onPress={itemOnPress(item)}
              />
            );
          }}
        />
      </View>
    );
  };
  const recentlySectionRender = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
          //set Shadow
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.5,
          shadowRadius: 9.5,
          elevation: 15,
          flexDirection: 'row',
        }}>
        <View style={{width: 65, marginLeft: SIZES.base}}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
            // backgroundColor: 'red',
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => RecentlyViewedSection(item, index)}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TRENDING
      </Text>
      {trendingSectionRender()}
      {recentlySectionRender()}
      {/* {store.getState().UserActionReducer?.data && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={store.getState().UserActionReducer?.isChosing}>
          <BlurView
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                store.dispatch(UnPickItem());
                // console.log(users.payload?.UserActionReducer?.isChosing);
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </BlurView>
        </Modal>
      )} */}
      {store.getState().UserActionReducer?.data && (
        <CustomModal
          item={store.getState().UserActionReducer?.data}
          visible={store.getState().UserActionReducer?.isChosing}></CustomModal>
      )}
    </View>
  );
};

export default Home;
