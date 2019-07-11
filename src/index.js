import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import NavigationService from './services/navigation';

import Header from './components/Header';
import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Header />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
};

export default App;
