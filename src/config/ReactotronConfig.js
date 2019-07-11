import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';

const host = '192.168.15.10';

if (__DEV__) {
  const tron = Reactotron.configure({ host })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronReduxSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
