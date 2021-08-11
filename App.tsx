import React, {createContext, useState} from 'react';
import {
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
import {icons, images, COLORS, FONTS, SIZES} from './src/constants';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';
import StoreProvider from './src/context/Store';

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

  return (
    <StoreProvider>
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
                <TouchableOpacity style={{marginLeft: 4}} onPress={onPress}>
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: 4}}
                  onPress={() => {
                    console.log('Header right press');
                  }}>
                  <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{width: 30, height: 30}}></Image>
                </TouchableOpacity>
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
    </StoreProvider>
  );
};

export default App;
