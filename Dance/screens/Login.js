import React from 'react';
import { AsyncStorage, Button, View } from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Dance Marathon'
  };

  render() {
    return (
      <View >
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

export default SignInScreen;