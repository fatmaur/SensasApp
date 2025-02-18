import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';  // Slider'ı bu şekilde içeri aktarıyoruz

const ControlPanel = () => {
  // Pervane hızı state'i, varsayılan olarak 0
  const [fanSpeed, setFanSpeed] = useState(0);

  // Hız değiştikçe yapılacak işlem
  const handleSpeedChange = (value) => {
    setFanSpeed(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pervane Hızı: {fanSpeed}%</Text>

      {/* Kaydırmalı çubuk ile hız seçimi */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={25}
        value={fanSpeed}
        onValueChange={handleSpeedChange}
      />

      {/* Çalışma durumu */}
      <Text style={styles.status}>
        {fanSpeed === 0 ? 'Çalışmıyor' : 'Çalışıyor'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    color: 'green',
  },
});

export default ControlPanel;
