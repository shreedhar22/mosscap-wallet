import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

// import Video from 'react-native-video'; // react-natove-video is a native library, it won't run using expo
// So you will need to run it using IOS prebuild. Follow the steps from here: https://github.com/TheWidlarzGroup/react-native-video/issues/4299#issuecomment-2512171913
// for IOS builds, follow the steps here: https://docs.expo.dev/build-reference/ios-builds/
// We are using expo-av for sounds to avoid doing the ios-build dance
 
const { width, height } = Dimensions.get('window');
const CoinRainAnimation: React.FC = () => {

  const animationRef = useRef<LottieView>(null);
  // const videoRef = useRef<Video>(null);

  useEffect(() => {

    let sound: Audio.Sound | null = null;

    const playSound = async () => {
      try {
        // Load the audio file
        sound = new Audio.Sound();
        await sound.loadAsync(require('../../assets/sounds/coin-clatter.wav'));
        await sound.setIsLoopingAsync(false); // Disable looping if not needed
        await sound.playAsync(); // Play the sound
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };

    playSound();

    const timer = setTimeout(() => {
      animationRef.current?.pause(); // Pause the animation after 15 seconds
    }, 3300); // 3.2 seconds

    return () =>{
      if (sound) {
        sound.unloadAsync();
      }
      clearTimeout(timer);       
    } // Clear the timeout if the component unmounts
  }, []);

  return (
    <View style={styles.container} pointerEvents="none">
      <LottieView
        ref= {animationRef}
        source={require('../../assets/animations/coin-falling.json')} // Path to your Lottie file
        autoPlay
        loop
        speed={2}
        style={styles.animation}
      />
      
      {/* react-natove-video is a native library and you will need to tun it using IOS prebuild */}

      {/* <Video
            ref={videoRef}
            source={require('../../assets/sounds/dropping-money.mp3')} // Path to your sound file
            audioOnly
            playInBackground={false} // Disable background playback
            ignoreSilentSwitch="obey" // Play sound even if phone is in silent mode
            onError={(error:any) => console.log('Audio Error:', error)}
            style={styles.hiddenVideo} // Keep video hidden
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Overlay the animation on the screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  animation: {
    width: width * 0.8, // Scale the animation
    height: height ,
  },
  hiddenVideo: {
    width: 0,
    height: 0, // Keep the video hidden
  },
});

export default CoinRainAnimation;