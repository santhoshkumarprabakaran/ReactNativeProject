import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const ProgressBar = ({ progress, onSeek }) => {
  const handleSeek = (event) => {
    const { pageX, target } = event.nativeEvent;
    const { width, x } = target.layout;
    const percentage = (pageX - x) / width * 100;
    onSeek(percentage);
  };

  return (
    <View style={styles.container} onTouchStart={handleSeek}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
});

export default ProgressBar;
