/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';
import {Svg, Polygon} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import store from '../redux/store';
import {UnPickItem} from '../redux/action/ActionWItem';
import RecentlyViewedSection from './RecentlyViewedSection';
import {AddToCart, HideCart} from '../redux/action/ActionWCart';
import _ from 'lodash';
type CustomProperties = {
  item: any;
  visible: boolean;
  type: string;
};

const CustomModal: React.FC<CustomProperties> = ({item, visible, type}) => {
  // console.log(item);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedInfor, setSelectedInfor] = useState({});
  var _ = require('lodash');
  var SIZE = selectedSize;
  var prices = store.getState().ActionWCartReducer?.cart;
  var totalPrice = prices.map((item, Number) => {
    return item.price;
  });
  totalPrice = totalPrice.map(Number);
  var sum = _.sum(totalPrice);
  console.log(sum);
  const renderSizeSection = () => {
    if (item?.sizes) {
      return (
        // <View>
        //   <Text>{item.sizes}</Text>
        // </View>
        item.sizes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: 35,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 6,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.white,
                backgroundColor:
                  store.getState().ActionWItemReducer?.item?.sizes[index] ===
                  selectedSize
                    ? COLORS.white
                    : null,
              }}
              onPress={() => {
                setSelectedSize(item);
                SIZE = item;
              }}>
              <Text
                style={{
                  color:
                    store.getState().ActionWItemReducer?.item?.sizes[index] ===
                    selectedSize
                      ? COLORS.black
                      : COLORS.white,
                  ...FONTS.body4,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })
      );
    } else {
      return null;
    }
  };

  const renderItemsOnCart = (item, index) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginVertical: 2,
          borderBottomWidth: 0.3,
          borderBottomColor: COLORS.lightGray,
        }}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row'}}
          onPress={() => {
            console.log(item);
          }}>
          {/* <View></View> */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.img}
              resizeMode="contain"
              style={{width: 100, height: 80}}
            />
          </View>
          <View
            style={{
              flex: 1.3,
              marginLeft: SIZES.radius,
              justifyContent: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: COLORS.gray, ...FONTS.body3}}>
              {item.name}
            </Text>
            <Text style={{color: COLORS.black, ...FONTS.h3}}>
              ${item.price} - Size: {item.sizes}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const saveToBag = () => {
    // var newSize = size;
    // console.log(selectedInfor);
    // console.log(selectedInfor?.size);
    // console.log(SIZE);
    store.dispatch(AddToCart(selectedInfor));
    // console.log(store.getState().UserActionReducer);
    // setSelectedInfor([name, type, price, newSize]);
  };
  useEffect(() => {
    setSelectedInfor({
      id: item.id,
      img: item.img,
      name: item.name,
      type: item.type,
      price: item.price,
      size: selectedSize,
    });
  }, [selectedSize]);
  if (type === 'ShowCart') {
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <BlurView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor={COLORS.white}>
          <TouchableOpacity
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            onPress={() => {
              store.dispatch(HideCart());
              console.log(store.getState().ActionWCartReducer?.cart);
              // console.log(users.payload?.UserActionReducer?.isChosing);
            }}
          />
          <View
            style={{
              width: '90%',
              height: '65%',
              backgroundColor: COLORS.white,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.5,
              shadowRadius: 9.5,
              elevation: 15,
              borderRadius: 15,
            }}>
            {/* <View>
              <Text>Cart</Text>
            </View> */}
            <View
              style={{
                width: '96%',
                height: '75%',
                // backgroundColor: 'red',
                marginVertical: 10,
              }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={store.getState().ActionWCartReducer?.cart}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderItemsOnCart(item, index)}
                // style={{borderBottomWidth: 0.2, borderColor: COLORS.lightGray}}
              />
            </View>
            <View
              style={{
                width: '96%',
                height: 25,
                // backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  // backgroundColor: 'blue',
                  width: '50%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.h3}}>Voucher</Text>
              </View>
              <View
                style={{
                  // backgroundColor: 'green',
                  width: '50%',
                  height: '100%',
                  // flexDirection: 'row-reverse',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    borderWidth: 0.4,
                    width: '100%',
                    height: '100%',
                    borderColor: COLORS.lightGray,
                  }}
                  onChangeText={value => {
                    console.log(value);
                  }}
                  // value={number}
                  placeholder="sadjfgsidufgiasudfgasuid"
                  // keyboardType="numeric"
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 6,
                width: '96%',
                height: 0.5,
                backgroundColor: COLORS.lightGray,
              }}
            />
            <View
              style={{
                width: '96%',
                height: 25,
                // backgroundColor: 'red',
                flexDirection: 'row',
                borderBottomWidth: 0.2,
                borderColor: COLORS.lightGray,
              }}>
              <View
                style={{
                  // backgroundColor: 'blue',
                  width: '50%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text style={{color: COLORS.black, ...FONTS.h3}}>
                  Total price
                </Text>
              </View>
              <View
                style={{
                  // backgroundColor: 'green',
                  width: '50%',
                  height: '100%',
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'red', ...FONTS.h3}}>$ {sum}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.lightGray,
                width: '96%',
                height: 40,
                marginVertical: 6,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}
              onPress={() => {
                console.log('checkout');
              }}>
              <Text style={{color: COLORS.black, ...FONTS.h3}}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    );
  } else {
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <BlurView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor={COLORS.white}>
          <TouchableOpacity
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            onPress={() => {
              store.dispatch(UnPickItem());
              // console.log(users.payload?.UserActionReducer?.isChosing);
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              width: '85%',
              backgroundColor: item.bgColor,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -SIZES.padding * 2,
              }}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: '90%',
                  height: 170,
                  transform: [{rotate: '-15deg'}],
                }}
              />
            </View>
            <Text
              style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.body2,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                marginTop: SIZES.base / 2,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              #{item.type}
            </Text>
            <Text
              style={{
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h1,
              }}>
              {item.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.padding,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}>
                  Select size
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginLeft: SIZES.padding,
                }}>
                {renderSizeSection()}
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 70,
                marginTop: SIZES.base,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
              onPress={() => {
                saveToBag();
                store.dispatch(UnPickItem());
                console.log(store.getState());
                // console.log(selectedInfor);
                // console.log(item);
                // setSelectedSize('');
                // store.dispatch(UnPickItem());
                // console.log(users.payload?.UserActionReducer?.isChosing);
              }}>
              <Text style={{color: COLORS.white, ...FONTS.largeTitleBold}}>
                Add to bag
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    );
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
