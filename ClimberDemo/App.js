import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './scene/Login';
import Main from './scene/Main';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
    },
    MainScreen: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
