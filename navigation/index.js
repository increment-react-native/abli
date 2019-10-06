
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'modules/basics/Login';
import ForgotPassword from 'modules/basics/ForgotPassword';
import Register from 'modules/basics/Register';
import Drawer from './Drawer';
import WalletHistoryStack from 'modules/wallet/History';
import FundTransferStack from 'modules/wallet/FundTransfer';



// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: Login }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})

// Forgot Password stack
const ForgotPasswordStack = createStackNavigator({
  forgotPasswordScreen: { screen: ForgotPassword }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})

// Forgot Password stack
const RegisterStack = createStackNavigator({
  registerScreen: { screen: Register }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  forgotPasswordStack: { screen: ForgotPasswordStack},
  registerStack: { screen: RegisterStack},
  drawerStack: { screen: Drawer },
  walletHistoryStack: { screen: WalletHistoryStack },
  fundTransferStack: { screen: FundTransferStack}
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav;