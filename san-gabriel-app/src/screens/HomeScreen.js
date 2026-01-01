import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import colors from '../constants/colors';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Turn Vehicles Into Billboards</Text>
            <Text style={styles.heroSubtitle}>Or Brand Your Own Fleet</Text>
            <Text style={styles.heroDescription}>
              Monetize your vehicles or get professional fleet branding
            </Text>
          </View>
        </View>

        {/* Dual CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Advertise Your Business</Text>
            <Text style={styles.ctaDescription}>
              Place ads on vehicles across our network at $1/sq ft/month
            </Text>
            <Button 
              title="Start Advertising" 
              onPress={() => navigation.navigate('Contact', { service: 'advertising' })}
              size="md"
            />
          </View>

          <View style={[styles.ctaCard, styles.ctaCardAccent]}>
            <Text style={[styles.ctaTitle, styles.ctaTitleLight]}>Brand Your Fleet</Text>
            <Text style={[styles.ctaDescription, styles.ctaDescriptionLight]}>
              Professional wraps and signage from $249
            </Text>
            <Button 
              title="Get Quote" 
              variant="secondary"
              onPress={() => navigation.navigate('Contact', { service: 'branding' })}
              size="md"
              style={styles.ctaButtonLight}
            />
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$300-500</Text>
            <Text style={styles.statLabel}>Per Truck/Month</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$200+</Text>
            <Text style={styles.statLabel}>Per Window/Month</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$1</Text>
            <Text style={styles.statLabel}>Per Sq Ft/Month</Text>
          </View>
        </View>

        {/* Services Preview */}
        <View style={styles.servicesPreview}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <Button 
            title="View All Services" 
            variant="outline"
            onPress={() => navigation.navigate('Services')}
            size="md"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  hero: {
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30, 58, 90, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.accent[400],
    textAlign: 'center',
    marginTop: 4,
  },
  heroDescription: {
    fontSize: 16,
    color: colors.neutral[200],
    textAlign: 'center',
    marginTop: 12,
  },
  ctaSection: {
    padding: 16,
    gap: 12,
  },
  ctaCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaCardAccent: {
    backgroundColor: colors.accent[500],
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary[900],
    marginBottom: 8,
  },
  ctaTitleLight: {
    color: colors.white,
  },
  ctaDescription: {
    fontSize: 14,
    color: colors.neutral[600],
    marginBottom: 16,
  },
  ctaDescriptionLight: {
    color: colors.accent[100],
  },
  ctaButtonLight: {
    borderColor: colors.white,
  },
  statsSection: {
    flexDirection: 'row',
    backgroundColor: colors.primary[900],
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.accent[400],
  },
  statLabel: {
    fontSize: 11,
    color: colors.neutral[300],
    textAlign: 'center',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.primary[700],
  },
  servicesPreview: {
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary[900],
    marginBottom: 16,
  },
});

export default HomeScreen;
