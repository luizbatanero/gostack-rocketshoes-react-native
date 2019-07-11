import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back() {
  navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  back,
  setNavigator,
};
