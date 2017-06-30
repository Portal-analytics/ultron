import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Expo, { Asset, Audio, Font, Permissions } from 'expo';
import Home from './Home.js';
import Notes from './Notes.js';

class App extends React.Component {

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    (async () => {

      this.setState({ fontLoaded: true });
    })();
    this._askForPermissions();
  }

  _askForPermissions = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  };

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link
              to="/"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
              <Text>Record</Text>
            </Link>
            <Link
              to="/notes"
              underlayColor='#f0f4f7'
              style={styles.navItem} >
              <Text>Notes</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={Notes} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "lightblue",
    marginBottom: 10,
    borderRadius: 10
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  }
});

export default App;
