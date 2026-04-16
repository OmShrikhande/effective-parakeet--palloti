import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSequence,
  Easing
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Colors } from '../constants/Theme';

const { width, height } = Dimensions.get('window');

const Blob = ({ color, size, duration, delay }: { color: string, size: number, duration: number, delay: number }) => {
  const posX = useSharedValue(Math.random() * width);
  const posY = useSharedValue(Math.random() * height);
  const scale = useSharedValue(1);

  useEffect(() => {
    posX.value = withRepeat(
      withTiming(Math.random() * width, { duration, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
    posY.value = withRepeat(
      withTiming(Math.random() * height, { duration: duration * 1.2, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
    scale.value = withRepeat(
      withTiming(1.5, { duration: duration * 0.8 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: posX.value },
      { translateY: posY.value },
      { scale: scale.value }
    ],
    opacity: 0.4,
  }));

  return (
    <Animated.View style={[
      styles.blob, 
      { backgroundColor: color, width: size, height: size, borderRadius: size / 2 },
      animatedStyle
    ]} />
  );
};

export const BackgroundBlobs = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
       {/* Deep Background */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: Colors.background }]} />
      
      {/* Moving Blobs */}
      <Blob color={Colors.primary} size={300} duration={10000} delay={0} />
      <Blob color={Colors.secondary} size={400} duration={15000} delay={1000} />
      <Blob color="#7F00FF" size={250} duration={12000} delay={500} />
      
      {/* Blur Overlay to create Liquid Look */}
      {Platform.OS !== 'web' ? (
        <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill} />
      ) : (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(11, 16, 38, 0.4)', backdropFilter: 'blur(80px)' } as any]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
    top: -150,
    left: -150,
  },
});
