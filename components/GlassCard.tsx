import React from 'react';
import { StyleSheet, View, ViewStyle, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Colors, GlassTheme } from '../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
  hasGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  style, 
  intensity = GlassTheme.intensity,
  hasGlow = false 
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Background Blur */}
      {Platform.OS !== 'web' ? (
        <BlurView
          intensity={intensity}
          tint="dark"
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)' } as any]} />
      )}

      {/* Optional Inner Glow */}
      {hasGlow && (
        <LinearGradient
          colors={['rgba(255, 45, 85, 0.1)', 'transparent']}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}

      {/* Luminous Border */}
      <View style={[StyleSheet.absoluteFill, styles.borderOverlay]} />

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: GlassTheme.borderRadius,
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }
    }),
  },
  borderOverlay: {
    borderWidth: GlassTheme.borderWidth,
    borderColor: Colors.glassBorder,
    borderRadius: GlassTheme.borderRadius,
    opacity: 0.6,
  },
  content: {
    padding: 16,
  },
});
