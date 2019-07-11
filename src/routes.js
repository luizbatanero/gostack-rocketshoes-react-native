import { createAppContainer, createStackNavigator } from 'react-navigation';

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
        header: null,
      },
      transitionConfig,
    }
  )
);

export default Routes;
