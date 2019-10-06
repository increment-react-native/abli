import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { Routes, Color, Helper } from 'common';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
class History extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={Style.MainContainer}>
        <View style={Style.LogoContainer}>
          <Image source={require('assets/logo.png')} style={Style.LogoSize}/>
        </View>
        <View style={Style.TextContainer}>
          <Text>Welcome to {Helper.APP_NAME}</Text>
        </View>
      </View>
    );
  }
}

class HeaderOptions extends Component {
  constructor(props){
    super(props);
  }
  back = () => {
    this.props.navigationProps.navigate('drawerStack');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon icon={ faChevronLeft } style={{color: Color.white, paddingLeft: 20, paddingRight: 20}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const HistoryStack = createStackNavigator({
  merchantScreen: {
    screen: History, 
    navigationOptions: ({ navigation }) => ({
      title: 'Transaction History',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      drawerLabel: 'Transaction History',
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    })
  }
})

export default HistoryStack;