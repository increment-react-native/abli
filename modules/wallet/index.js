import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, TouchableHighlight, Text} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
class Wallet extends Component{
  constructor(props){
    super(props);
    this.state = {
      balance: 123456789
    };
  }
  render() {
    return (
      <View style={Style.MainContainer}>
        <View style={Style.LogoContainer}>
            <Text style={{fontSize: 20, color: Color.gray}}>Php</Text>
            <Text style={{fontSize: 40}}>{currencyFormat(this.state.balance)} </Text>
        </View>
        <View style={Style.TextContainer}>
          <Text style={{fontSize: 20}}>Current Balance</Text>
        </View>
        <TouchableHighlight
          style={[BasicStyles.btn, BasicStyles.btnPrimary]}
          onPress={() => this.redirect()}
          underlayColor={Color.gray}>
          <Text style={BasicStyles.textWhite}>
            View Transaction History
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[BasicStyles.btn, BasicStyles.btnPrimary]}
          onPress={() => this.redirect()}
          underlayColor={Color.gray}>
          <Text style={BasicStyles.textWhite}>
            Transfer Funds
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
function currencyFormat(value) {
  value=round2Fixed(value);
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function round2Fixed(value) {
  value = +value;

  if (isNaN(value))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

  // Shift back
  value = value.toString().split('e');
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}
export default Wallet;