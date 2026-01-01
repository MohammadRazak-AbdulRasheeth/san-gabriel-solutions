import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import colors from '../constants/colors';

const ServiceDetailScreen = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{service.name}</Text>
          <Text style={styles.heroTagline}>{service.tagline}</Text>
          {service.pricing && (
            <View style={styles.pricingBadge}>
              <Text style={styles.pricingAmount}>{service.pricing.amount}</Text>
              <Text style={styles.pricingUnit}>{service.pricing.unit}</Text>
            </View>
          )}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This Service</Text>
          <Text style={styles.description}>{service.shortDescription}</Text>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Benefits</Text>
          <View style={styles.benefitsList}>
            <BenefitItem text="Professional design and execution" />
            <BenefitItem text="Flexible terms and pricing" />
            <BenefitItem text="Dedicated support team" />
            <BenefitItem text="Fast turnaround times" />
          </View>
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Button 
            title="Get Started" 
            onPress={() => navigation.navigate('Contact', { service: service.id })}
            size="lg"
          />
          <Button 
            title="Call Us" 
            variant="outline"
            onPress={() => {}}
            size="lg"
            style={styles.secondaryButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BenefitItem = ({ text }) => (
  <View style={styles.benefitItem}>
    <Ionicons name="checkmark-circle" size={20} color={colors.success} />
    <Text style={styles.benefitText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  hero: {
    backgroundColor: colors.primary[900],
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 16,
    color: colors.neutral[300],
    textAlign: 'center',
  },
  pricingBadge: {
    backgroundColor: colors.accent[500],
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  pricingAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  pricingUnit: {
    fontSize: 12,
    color: colors.accent[100],
    marginTop: 2,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary[900],
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: colors.neutral[600],
    lineHeight: 24,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitText: {
    fontSize: 15,
    color: colors.neutral[700],
    flex: 1,
  },
  ctaSection: {
    padding: 20,
    gap: 12,
  },
  secondaryButton: {
    marginTop: 0,
  },
});

export default ServiceDetailScreen;
