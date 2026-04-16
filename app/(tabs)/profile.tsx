import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../../constants/Theme';
import { GlassCard } from '../../components/GlassCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  const menuItems = [
    { id: '1', title: 'My Orders', icon: 'cube-outline' },
    { id: '2', title: 'Wishlist', icon: 'heart-outline' },
    { id: '3', title: 'Payment Methods', icon: 'card-outline' },
    { id: '4', title: 'Delivery Address', icon: 'location-outline' },
    { id: '5', title: 'Settings', icon: 'settings-outline' },
    { id: '6', title: 'Help Center', icon: 'help-circle-outline' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#1A1F38']}
        style={StyleSheet.absoluteFill}
      />
      
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarGlow} />
              <View style={styles.avatar}>
                <Ionicons name="person" size={50} color="white" />
              </View>
            </View>
            <Text style={styles.userName}>Alex Rivers</Text>
            <Text style={styles.userEmail}>alex.rivers@zynix.com</Text>
            
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <GlassCard style={styles.statItem} intensity={10}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </GlassCard>
            <GlassCard style={styles.statItem} intensity={10}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Coupons</Text>
            </GlassCard>
            <GlassCard style={styles.statItem} intensity={10}>
              <Text style={styles.statValue}>2.4k</Text>
              <Text style={styles.statLabel}>Points</Text>
            </GlassCard>
          </View>

          {/* Menu */}
          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.id}>
                <GlassCard style={styles.menuItem} intensity={20}>
                  <View style={styles.menuItemLeft}>
                    <View style={styles.iconWrapper}>
                      <Ionicons name={item.icon as any} size={22} color={Colors.secondary} />
                    </View>
                    <Text style={styles.menuText}>{item.title}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
                </GlassCard>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarGlow: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.primary,
    opacity: 0.15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  userName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  userEmail: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },
  editBtn: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  editBtnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    marginBottom: 30,
  },
  statItem: {
    width: (Dimensions.get('window').width - Spacing.lg * 2 - 20) / 3,
    alignItems: 'center',
    padding: 15,
  },
  statValue: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: '800',
  },
  statLabel: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  menuContainer: {
    paddingHorizontal: Spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutBtn: {
    marginTop: 20,
    marginBottom: 50,
    alignSelf: 'center',
  },
  logoutText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});
