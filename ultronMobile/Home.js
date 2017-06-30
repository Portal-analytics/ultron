import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false
    }
  }

  startRecording = () => {
    this.setState({
      ...this.state,
      recording: true
    })
  }

  stopRecording = () => {
    this.setState({
      ...this.state,
      recording: false
    })
  }

  render() {

    return (
      <View>
        <Text>Home</Text>
        {!this.state.recording &&
        <Button title="Start Record"
            onPress={this.startRecording}
            >   
        </Button>
        }
        {this.state.recording &&
        <Button title="Stop Record"
            onPress={this.stopRecording}
            >
            
        </Button>
        }
        {}
      </View>
    )
  }
}

export default Home;