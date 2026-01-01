import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { companyInfo } from '../data/companyInfo';
import colors from '../constants/colors';

const AboutScreen = () => {
  const handleCall = () => {
    Linking.openURL(`tel:${companyInfo.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${companyInfo.email}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>About San Gabriel Solutions</Text>
          </View>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            San Gabriel Solutions exists to identify high-traffic physical and digital 
            environments and convert them into revenue-generating assets for businesses, 
            trucking companies, property owners, and nonprofit organizations.
          </Text>
          <Text style={styles.paragraph}>
            We do this through a combination of physical advertising, digital infrastructure, 
            and execution services. Everything connects back to: Traffic → Visibility → Monetization.
          </Text>
        </View>

        {/* Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesList}>
            <ValueItem 
              icon="shield-checkmark" 
              title="Transparency" 
              description="Clear pricing and honest communication"
            />
            <ValueItem 
              icon="flash" 
              title="Results-Driven" 
              description="Focused on measurable outcomes"
            />
            <ValueItem 
              icon="people" 
              title="Partnership" 
              description="We succeed when you succeed"
            />
          </View>
        </View>

        {/* Contact CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to get started?</Text>
          <View style={styles.ctaButtons}>
            <Button title="Call Us" onPress={handleCall} size="md" />
            <Button title="Email Us" variant="outline" onPress={handleEmail} size="md" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ValueItem = ({ icon, title, description }) => (
  <View style={styles.valueItem}>
    <View style={styles.valueIcon}>
      <Ionicons name={icon} size={24} color={colors.accent[500]} />
    </View>
    <View style={styles.valueContent}>
      <Text style={styles.valueTitle}>{title}</Text>
      <Text style={styles.valueDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  hero: {
    height: 200,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary[900],
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 15,
    color: colors.neutral[600],
    lineHeight: 24,
    marginBottom: 12,
  },
  valuesList: {
    gap: 16,
  },
  valueItem: {
    flexDirection: 'row',
    gap: 16,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.accent[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary[900],
    marginBottom: 4,
  },
  valueDescription: {
    fontSize: 14,
    color: colors.neutral[600],
  },
  ctaSection: {
    padding: 20,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary[900],
    marginBottom: 16,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default AboutScreen;
