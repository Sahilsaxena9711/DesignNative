import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import Login from './container/login';
import Home from './container/home';
import Notifications from './container/notifications'
import DrawerContentComponents from './container/drawerContentComponents'

const HomeScreenStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerTitle: 'Home',
      drawerLabel: 'Home'
    }),
  }
);

const NotificationsScreenStack = createStackNavigator(
  {
    Notifications: {
      screen: Notifications,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Notifications',
      headerMode: 'screen',
      headerTitle: 'Notifications',
      drawerLabel: 'Notifications'
    }),
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    name: 'HomeScreenStack',
    screen: HomeScreenStack,
  },
  Notifications: {
    name: 'NotificationsScreenStack',
    screen: NotificationsScreenStack,
  }
}, {
    contentComponent: DrawerContentComponents,
    drawerWidth: 280,
    contentOptions: {
      activeTintColor: 'blue'
    }
  }
);

export default Routes = createAppContainer(createSwitchNavigator(
  {
    MyDrawerNavigator: MyDrawerNavigator,
    Login: Login
  },
  {
    initialRouteName: 'Login',
  }
));