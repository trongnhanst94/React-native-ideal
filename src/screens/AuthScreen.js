import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import { Fonts, Colors, Messages } from '../constants';



export default class AuthScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      anim: new Animated.Value(0),
      isKeyboardVisible: false,
      username: '',
      password: '',
      message: ''
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }), this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }), this._keyboardDidHide.bind(this));
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
  }

  _isCheckValid = () => {
    const { username, password } = this.state;
    if (username === '' || password === '') {
      this.setState({ message: Messages.AuthScreen.required })
      return false;
    } else {
      return true;
    };
  }

  _onPressButton = () => {
    const { username, password } = this.state;
    if (this._isCheckValid()) {
      this.props.authStateActions(username, password);
    }
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }

  render() {
    return (
      <View style={[styles.container, { paddingBottom: this.state.isKeyboardVisible ? 220 : 0 }]}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >

        <View style={[styles.section, { paddingTop: 30 }]}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.logo, this.state.isKeyboardVisible && { height: 90 }, this.fadeIn(0)]}
            source={require('../../assets/images/logo_rn_ideal_white.png')}
          />
        </View>

        <Animated.View style={[styles.section, styles.middle, this.fadeIn(700, -20)]}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.nativeEvent.text })}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.textInput}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.nativeEvent.text })}
          />

          <Text style={{color: Colors.white, fontFamily: Fonts.primaryRegular, paddingTop: 20}}>{this.state.message}</Text>

          <Animated.View style={[styles.section, styles.bottom, this.fadeIn(700, -20)]}>
            <Button
            raised
            icon={{name: 'cached'}}
            buttonStyle = {{ backgroundColor: Colors.cor5 }}
            title='ĐĂNG NHẬP'
            onPress={() => this._onPressButton()} />

            { !this.state.isKeyboardVisible && (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.spring();
                }}
                style={{paddingTop: 30, flexDirection: 'row' }}
              >
                <Text style={{color: Colors.white, fontFamily: Fonts.primaryRegular}}>Don't have an account?</Text>
                <Text style={{color: Colors.white, fontFamily: Fonts.primaryBold, marginLeft: 5}}>Register</Text>
              </TouchableOpacity>
            )} 
          </Animated.View>
        </Animated.View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 30,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
  last: {
    justifyContent: 'flex-end',
  },
  textInput: {
    alignSelf: 'stretch',
    marginTop: 20,
    fontSize: 17,
    color: Colors.gray,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    opacity: 0.7
  },
  logo: {
    height: 150,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
  },
  socialButtonCenter: {
    marginLeft: 10,
    marginRight: 10,
  },
});
