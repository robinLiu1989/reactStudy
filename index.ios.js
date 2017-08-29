/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
    Image
} from 'react-native';


import Picker from 'react-native-picker';
export default class study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource:''
        }
    }
    upload(){
        let data = [];
        for(var i=0;i<100;i++){
            data.push(i);
        }

        Picker.init({
            pickerData: data,
            selectedValue: [59],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }

  render() {
      // console.log(DeviceInfo.getModel());
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <TouchableOpacity
            onPress={()=>{this.upload()}}
            style={{marginTop:20}}>
          <Text style={{fontFamily:'iconfont'}}>&#xe602;</Text>
        </TouchableOpacity>



      </View>
    );
  }






}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('study', () => study);
