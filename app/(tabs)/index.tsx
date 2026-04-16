import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, GlassTheme } from '../../constants/Theme';
import { Products, Categories, Banners } from '../../constants/DemoData';
import { ProductCard } from '../../components/ProductCard';
import { GlassCard } from '../../components/GlassCard';
import { BackgroundBlobs } from '../../components/BackgroundBlobs';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Dynamic Background */}
      <BackgroundBlobs />
      
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome to</Text>
            <Text style={styles.brandName}>ZYNIX</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Search Bar with Glow */}
          <GlassCard style={styles.searchContainer} intensity={10} hasGlow>
            <Ionicons name="search" size={20} color={Colors.textSecondary} />
            <TextInput
              placeholder="Search latest trends..."
              placeholderTextColor={Colors.textSecondary}
              style={styles.searchInput}
            />
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </GlassCard>

          {/* Banner Slider */}
          <FlatList
            data={Banners}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.bannerWrapper}>
                <Image source={item.image} style={styles.bannerImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(11, 16, 38, 0.9)']}
                  style={styles.bannerOverlay}
                />
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                  <Text style={styles.bannerTitle}>{item.title}</Text>
                  <TouchableOpacity style={styles.shopNowBtn}>
                     <Text style={styles.shopNowText}>Shop Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={styles.bannerList}
          />

          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
          </View>
          <FlatList
            data={Categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: Spacing.lg }}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryItem}>
                <GlassCard style={styles.categoryIcon} intensity={40}>
                  <Ionicons name={item.icon as any} size={28} color={Colors.secondary} />
                </GlassCard>
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          {/* Featured / New Arrivals */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Items</Text>
            <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
          </View>
          <View style={styles.productGrid}>
            {Products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  greeting: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  brandName: {
    color: 'white',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 4,
  },
  notificationBtn: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 14,
    width: 8,
    height: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  bannerList: {
    marginBottom: Spacing.xl,
  },
  bannerWrapper: {
    width: width,
    height: 240,
    paddingHorizontal: Spacing.lg,
  },
  bannerImage: {
    width: width - Spacing.lg * 2,
    height: '100%',
    borderRadius: 32,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: Spacing.lg,
    right: Spacing.lg,
    height: '70%',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  bannerContent: {
    position: 'absolute',
    bottom: 30,
    left: 45,
  },
  bannerSubtitle: {
    color: Colors.secondary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 12,
  },
  shopNowBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },
  viewAll: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  categoryIcon: {
    width: 68,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 24,
  },
  categoryName: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.lg,
    justifyContent: 'space-between',
  },
});
