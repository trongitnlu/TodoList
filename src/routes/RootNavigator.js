import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SCREENS from '../constants/screenNames';
import SplashScreen from '../screens/getStart/SplashScreen';
import TodoListOffLineScreen from '../screens/main/TodoListOffLineScreen';

const RootNavigator = createStackNavigator(
  {
    [SCREENS.SPLASH]: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    [SCREENS.MAIN]: TodoListOffLineScreen,
    [SCREENS.TODO_LIST_OFFLINE]: TodoListOffLineScreen,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
    headerLayoutPreset: 'center',
    initialRouteName: SCREENS.SPLASH,
  },
);

export default createAppContainer(RootNavigator);
