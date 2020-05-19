import React, {Component, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  Image,
  findNodeHandle,
} from 'react-native';
import AnimatedCircularProgress from './views/progressView/AnimatedCircularProgress';
import {BlurView} from 'react-native-blur';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: null,
    };
  }
  imageLoaded() {
    this.setState({viewRef: findNodeHandle(this.backgroundImage)});
  }
  componentDidMount() {
    this.timerID = setTimeout(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.refs.progressView.animate(60, 5000);
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../imgs/login_bg.png')}>
        <View style={styles.topView}>
          <Image
            ref={(img) => {
              this.backgroundImage = img;
            }}
            source={require('../imgs/head.jpg')}
            //style={{width: 80, height: 80, borderRadius: 40, marginLeft: 30}}
            style={styles.absolute}
            onLoadEnd={this.imageLoaded.bind(this)}
          />
          <Text style={styles.nameText}>Climber</Text>

          <BlurView //高斯模糊
            style={styles.absolute}
            viewRef={this.refs.img}
            blurAmount={20}
            blurType="light"
          />
        </View>
        <View style={styles.progressWholeView}>
          <AnimatedCircularProgress
            ref="progressView"
            style={styles.progressView}
            size={300}
            width={30}
            prefill={30}
            fill={30}
            tintColor="red"
            rotation={270}
            duration={2000}
            //onAnimationComplete={() => alert('com')}
            backgroundColor="#FFD8D8D8"
            _setStepVlue={this._setStepValue.bind(this)}
          />
        </View>
      </ImageBackground>
    );
  }

  //callBack：set the current value of progress
  _setStepValue(currentFillAngle) {
    // this.setState({
    //   step: currentFillAngle,
    // });
    // alert('aa'+currentFillAngle);
  }
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
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  nameText: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    textAlign: 'left',
    fontSize: 28,
    marginLeft: 20,
    fontWeight: 'bold',
  },

  progressWholeView: {
    marginTop: 0,
  },

  absolute: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 30,

  },
});
