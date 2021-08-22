/* eslint-disable react-native/no-inline-styles */
import React, {createContext, useState} from 'react';
import {
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
import {icons, images, COLORS, FONTS, SIZES} from './src/constants';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';
import StoreProvider from './src/context/Store';
import {connect, Provider} from 'react-redux';
import store from './src/redux/store';
import {BlurView} from '@react-native-community/blur';
import {UnPickItem} from './src/redux/action/ActionWItem';
import {ShowCart} from './src/redux/action/ActionWCart';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setstate] = useState(false);

  // if (state) {
  //   return (
  //     <Modal animationType="slide" transparent={true} visible={state}>
  //       <BlurView
  //         style={{
  //           flex: 1,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //         blurType="light"
  //         blurAmount={20}
  //         reducedTransparencyFallbackColor={COLORS.white}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    // <StoreProvider>
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'SHOE SELECTOR ',
              headerTintColor: COLORS.lightGray,
              headerTitleStyle: {
                ...FONTS.navTitle,
              },
              headerLeft: ({onPress}) => (
                <TouchableOpacity
                  style={{marginLeft: 4}}
                  onPress={() => {
                    setstate(true);
                  }}>
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{marginRight: 6}}
                    onPress={() => {
                      console.log('Header right press');
                    }}>
                    <Image
                      source={icons.search}
                      resizeMode="contain"
                      style={{width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginRight: -6}}
                    onPress={() => {
                      store.dispatch(ShowCart(true));
                      console.log(store.getState());
                    }}>
                    <Image
                      source={icons.shopping}
                      resizeMode="contain"
                      style={{width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
        </Stack.Navigator>
        {/* <SafeAreaView style={{}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View>
          <Text>hello</Text>
        </View>
      </SafeAreaView> */}
      </NavigationContainer>
      {/* // </StoreProvider> */}
    </Provider>
  );
};

export default App;
