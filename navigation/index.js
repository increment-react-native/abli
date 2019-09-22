
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'modules/basics/Login';
import Drawer from './Drawer';



// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: Login }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})


// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: Drawer }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})


export default PrimaryNav;