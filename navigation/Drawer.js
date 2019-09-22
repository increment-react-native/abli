import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slider from 'components/Slider';
import { Color } from 'common';
import Welcome from 'modules/basics/Welcome';
import OptionRight from './OptionRight';
class WelcomeDrawerStructure extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginState: true
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.state.loginState === true && 
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <FontAwesomeIcon icon={ faBars } style={{color: Color.white, paddingLeft: 20, paddingRight: 20}}/>
          </TouchableOpacity>
        }
        
      </View>
    );
  }
}
 
const Welcome_StackNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      title: 'Welcome',
      headerLeft: <WelcomeDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator({
  Welcome: {
    screen: Welcome_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Welcome',
    },
  },
}, {
  contentComponent: Slider
});

export default Drawer;