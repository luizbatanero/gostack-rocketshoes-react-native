import { createAppContainer, createStackNavigator } from 'react-navigation';

import React from 'react';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
