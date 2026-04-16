import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../../constants/Theme';
import { Products } from '../../constants/DemoData';
import { GlassCard } from '../../components/GlassCard';
import { BackgroundBlobs } from '../../components/BackgroundBlobs';
import { LinearGradient } from 'expo-linear-gradient';

export default function BagScreen() {
  // Demo: just taking the first 2 products as bag items
  const bagItems = Products.slice(0, 2);

  return (
    <View style={styles.container}>
      <BackgroundBlobs />
      
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Shopping Bag</Text>
          <Text style={styles.itemCount}>{bagItems.length} Items</Text>
        </View>

        <FlatList
          data={bagItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <GlassCard style={styles.bagItem} intensity={20}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.qBtn}><Ionicons name="remove" size={16} color="white" /></TouchableOpacity>
                    <Text style={styles.qText}>1</Text>
                    <TouchableOpacity style={styles.qBtn}><Ionicons name="add" size={16} color="white" /></TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.removeBtn}>
                <Ionicons name="trash-outline" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </GlassCard>
          )}
        />

        {/* Footer / Checkout */}
        <GlassCard style={styles.footer} intensity={40}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>$138.99</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <LinearGradient
              colors={Colors.accentGradient as any}
              style={styles.gradientBtn}
            >
              <Text style={styles.checkoutText}>Checkout Now</Text>
              <Ionicons name="card-outline" size={20} color="white" style={{ marginLeft: 8 }} />
            </LinearGradient>
          </TouchableOpacity>
        </GlassCard>
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
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
  },
  itemCount: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  listContent: {
    padding: Spacing.lg,
    paddingBottom: 200,
  },
  bagItem: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    padding: 12,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: Colors.surface,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  itemCategory: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    padding: 4,
  },
  qBtn: {
    padding: 4,
  },
  qText: {
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  removeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.lg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginHorizontal: 0,
    borderWidth: 0,
    borderTopWidth: 1,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  totalPrice: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
  },
  checkoutBtn: {
    marginBottom: 30,
  },
  gradientBtn: {
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
