import React, {Component, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import IMyInput from './views/IMyInput';
import {StackActions, NavigationActions} from 'react-navigation';

import Main from './Main';

export default class APP extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../imgs/login_bg.png')}>
        <View style={{flex: 1}} />

        <View style={{}}>
          <IMyInput placeholderText={'Username'} ref="userName" />
          <IMyInput
            placeholderText={'Password'}
            ref="passWrd"
            isPassword={true}
          />
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={'#0d66d0'}
            style={[styles.touchButton]}
            onPress={() => {
              var userName = this.refs.userName.state.content;
              var passWord = this.refs.passWrd.state.content;
              if (userName == 'abc' && passWord == '123456') {
                this.refs.userName.inputVal;
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({routeName: 'MainScreen'}),
                    ],
                  }),
                );
              } else {
                alert(
                  'Error account or password.\nUsername：abc\nPassword:123456',
                );
              }
            }}>
            <Text style={styles.touchButtonText}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
  // userChange() {
  //   let val1=this.refs.username.state.content;
  //   let val2 = '999998'
  //
  //   this.setState({
  //     username: val1+val2,
  //   });
  // }
  // passChange(e) {
  //   alert(e.target.value);
  //   this.setState({
  //     passWord: e.target.value,
  //   });
  // }
}

const styles = StyleSheet.create({
  touchButton: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#5D9DFF',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 30,
    marginBottom: 120,
  },
  touchButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
