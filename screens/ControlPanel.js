import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Slider from "@react-native-community/slider";

const ControlPanel = () => {
  const [fanSpeed, setFanSpeed] = useState(0);

  const handleSpeedChange = (value) => {
    setFanSpeed(value);
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Pervane Hızı: {fanSpeed}%</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={25}
          value={fanSpeed}
          onValueChange={handleSpeedChange}
        />
        <Text style={[styles.status, { color: fanSpeed === 0 ? "red" : "green" }]}>
          {fanSpeed === 0 ? "Çalışmıyor" : "Çalışıyor"}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
  },
});

export default ControlPanel;
