import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, Platform } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolate } from 'react-native-reanimated';
import { Colors, Spacing } from '../constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function LoginScreen() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, []);

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
    translateY.value = withSpring(isLoginVisible ? height : height * 0.3, {
      damping: 15,
      stiffness: 90,
    });
  };

  const trayStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const logoStyle = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, [height * 0.3, height], [0.6, 1]);
    const logoY = interpolate(translateY.value, [height * 0.3, height], [-height * 0.1, 0]);
    return {
      transform: [{ scale }, { translateY: logoY }],
    };
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#1A1F38', Colors.background]}
        style={StyleSheet.absoluteFill}
      />

      {/* Splash/Background Content */}
      <Animated.View style={[styles.welcomeContainer, logoStyle]}>
        <Text style={styles.logoText}>ZYNIX</Text>
        <Text style={styles.tagline}>Future of Fashion</Text>
        
        {!isLoginVisible && (
          <TouchableOpacity style={styles.getStartedBtn} onPress={toggleLogin}>
            <LinearGradient
              colors={Colors.accentGradient as any}
              style={styles.gradientBtn}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.btnText}>Explore Collection</Text>
              <Ionicons name="arrow-forward" size={20} color="white" style={{ marginLeft: 8 }} />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </Animated.View>

      {/* Sliding Login Tray */}
      <Animated.View style={[styles.loginTray, trayStyle]}>
        <View style={styles.dragHandle} />
        <View style={styles.trayHeader}>
          <Text style={styles.trayTitle}>Welcome Back</Text>
          <TouchableOpacity onPress={toggleLogin}>
            <Ionicons name="close-circle" size={24} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.textSecondary}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.textSecondary}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => router.replace('/(tabs)')}
        >
          <LinearGradient
            colors={Colors.accentGradient as any}
            style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or continue with</Text>
          <View style={styles.socialIcons}>
            <Ionicons name="logo-google" size={24} color="white" style={styles.socialIcon} />
            <Ionicons name="logo-apple" size={24} color="white" style={styles.socialIcon} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  logoText: {
    fontSize: 72,
    fontWeight: '900',
    color: 'white',
    letterSpacing: 10,
    textShadowColor: Colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  tagline: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: '300',
    letterSpacing: 4,
    marginTop: -10,
  },
  getStartedBtn: {
    marginTop: 60,
    width: width * 0.7,
  },
  loginTray: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.8,
    backgroundColor: '#1E2445',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: Spacing.xl,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: -10 }, shadowOpacity: 0.3, shadowRadius: 20 },
      android: { elevation: 20 },
    }),
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  trayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  trayTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    padding: 16,
    color: 'white',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  loginBtn: {
    marginTop: 10,
  },
  gradientBtn: {
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  socialText: {
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
  },
});
