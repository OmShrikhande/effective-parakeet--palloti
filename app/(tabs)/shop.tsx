import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../../constants/Theme';
import { Products, Categories } from '../../constants/DemoData';
import { ProductCard } from '../../components/ProductCard';
import { GlassCard } from '../../components/GlassCard';
import { BackgroundBlobs } from '../../components/BackgroundBlobs';
import { LinearGradient } from 'expo-linear-gradient';

export default function ShopScreen() {
  const [selectedCategory, setSelectedCategory] = useState('New Arrivals');

  return (
    <View style={styles.container}>
      <BackgroundBlobs />
      
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="filter" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <GlassCard style={styles.searchContainer} intensity={10}>
          <Ionicons name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            placeholder="Search items..."
            placeholderTextColor={Colors.textSecondary}
            style={styles.searchInput}
          />
        </GlassCard>

        {/* Horizontal Category Filter */}
        <View style={styles.categoryFilter}>
          <FlatList
            data={Categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: Spacing.lg }}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => setSelectedCategory(item.name)}
                style={[
                  styles.filterItem,
                  selectedCategory === item.name && styles.filterItemActive
                ]}
              >
                <Text style={[
                  styles.filterText,
                  selectedCategory === item.name && styles.filterTextActive
                ]}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Product Grid */}
        <FlatList
          data={Products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.gridContent}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
        />
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
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
  },
  filterBtn: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 10,
    borderRadius: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
  },
  categoryFilter: {
    marginBottom: Spacing.lg,
  },
  filterItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  filterItemActive: {
    backgroundColor: Colors.primary,
  },
  filterText: {
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  filterTextActive: {
    color: 'white',
  },
  gridContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
