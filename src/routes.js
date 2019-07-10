import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

import transitionConfig from './util/transition-config';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: {
        header: <Header />,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      },
      headerMode: 'float',
      headerTransitionPreset: 'uikit',
      transitionConfig,
    }
  )
);

export default Routes;
