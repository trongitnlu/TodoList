import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function reset(resetAction) {
  _navigator.dispatch(resetAction);
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

export function resetActionTo(screen) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: screen })],
  });
  _navigator.dispatch(resetAction);
}

// add other navigation functions that you need and export them
const NavigationServices = {
  navigate,
  goBack,
  reset,
  setTopLevelNavigator,
  resetActionTo,
};

export default NavigationServices;
