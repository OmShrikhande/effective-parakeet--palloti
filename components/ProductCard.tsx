import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../constants/Theme';
import { Product } from '../constants/DemoData';
import { GlassCard } from './GlassCard';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const cardWidth = (width - Spacing.lg * 3) / 2;

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <GlassCard style={styles.card} hasGlow={product.rating >= 4.9}>
        <View style={styles.imageContainer}>
          <Image 
            source={product.image} 
            style={styles.image} 
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.4)']}
            style={StyleSheet.absoluteFill}
          />
        </View>
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={styles.rating}>{product.rating}</Text>
            </View>
          </View>
          
          <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
          
          <View style={styles.footer}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addBtn}>
                 <Ionicons name="add" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity style={styles.wishlistBtn}>
          <Ionicons name="heart-outline" size={20} color="white" />
        </TouchableOpacity>
      </GlassCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    marginBottom: Spacing.lg,
    padding: 0,
  },
  imageContainer: {
    width: '100%',
    height: 190,
    backgroundColor: '#0F172A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  category: {
    color: Colors.secondary,
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  name: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  addBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  rating: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  wishlistBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 8,
  },
});
