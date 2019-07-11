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
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      headerMode: 'float',
      transitionConfig,
    }
  )
);

export default Routes;
