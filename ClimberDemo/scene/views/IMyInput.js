import React, {Component} from 'react';
import {
  TextInput,
  Text,
  Platform,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

export default class IMyInput extends Component {
  constructor(props) {
    super(props);
    this.inputValue = '';
    this.state = {
      isFocused: false,
      marginBottom: 0,
      content: '',
    };
  }

  startAnim(isFocused) {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    /**
     * animation
     */
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    let _marginValue = isFocused || this.inputValue.trim() ? 30 : 0;

    this.setState({
      marginBottom: _marginValue,
      isFocused: isFocused,
    });
  }

  render() {
    let state = this.state;

    return (
      <View
        style={[styles.inputBox, !state.isFocused && {borderBottomWidth: 1}]}>
        <View style={[styles.placeholderBox, {bottom: state.marginBottom}]}>
          <Text
            style={[
              {
                fontSize: state.marginBottom !== 0 ? 12 : 16,
                paddingBottom: state.marginBottom !== 0 ? 8 : 10,
                color: 'gray',
                textAlign: 'left',
              },
            ]}>
            {this.props.placeholderText}
          </Text>
        </View>
        <TextInput
          {...this.props}
          selectionColor={'#808080'}
          onChangeText={(text) => {
            this.inputValue = text;
            this.props.onChangeText && this.props.onChangeText(text);
            this.setState({content: text});
          }}
          {...this.props}
          onBlur={() => this.startAnim(false)}
          onFocus={() => {
            this.startAnim(true);
          }}
          secureTextEntry={this.props.isPassword === true}
          underlineColorAndroid="transparent"
          style={styles.input}
        />

        <View
          style={{
            backgroundColor: '#808080',
            width: state.isFocused ? '100%' : 0,
            height: 2,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    textAlign: 'left',
    fontSize: 18,
    color: '#FFFFFF',
  },
  inputBox: {
    height: 60,
    justifyContent: 'flex-end',
    borderColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
  },
  placeholderBox: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
