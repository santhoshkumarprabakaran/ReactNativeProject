import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { ProgressBar } from 'react-native-progress'; // Import the progress bar from react-native-progress

function VideoPlayer() {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleProgress = (data) => {
    const { currentTime, playableDuration } = data;
    const newProgress = (currentTime / playableDuration);
    setProgress(newProgress);
  };

  const handleSeek = (percentage) => {
    if (videoRef.current) {
      const { duration } = videoRef.current;
      const seekTime = percentage * duration;
      videoRef.current.seek(seekTime);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://example.com/myvideo.mp4' }}
        style={styles.video}
        onProgress={handleProgress}
      />
      <ProgressBar
        progress={progress}
        style={styles.progressBar}
        width={null} // Set width to null to use flexbox layout
        color={'green'}
        unfilledColor={'gray'}
        borderWidth={0}
        onPress={(event) => handleSeek(event.nativeEvent.locationX / event.nativeEvent.target.clientWidth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
  },
  progressBar: {
    width: '100%',
    height: 20,
    marginTop: 10,
  },
});

export default VideoPlayer;
