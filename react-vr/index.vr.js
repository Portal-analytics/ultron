import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image
} from "react-vr";

export default class WelcomeToVR extends React.Component {
  state = {
    source: "chess-world.jpg"
  };

  onViewClicked = () => {
    this.setState = {
      source: "sample.jpg"
    };
    console.log("click");
  };

  render() {
    return (
      <View>
        <Pano source={asset(this.state.source)} />
        <Text
          style={{
            backgroundColor: "darkblue",
            fontSize: 0.8,
            fontWeight: "200",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0.5, -7] }]
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            backgroundColor: "darkblue",
            fontSize: 0.8,
            fontWeight: "200",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0.5, -7] }]
          }}
        >
          Ultron
        </Text>
        <Text
          style={{
            backgroundColor: "black",
            width: 2,
            fontSize: 0.2,
            fontWeight: "100",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -5] }]
          }}
          onPress={() => console.log("press")}
        >
          click here to enter
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
