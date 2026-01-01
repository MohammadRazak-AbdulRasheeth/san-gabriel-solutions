import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const iconMap = {
  'trending-up': 'trending-up',
  'image': 'image-outline',
  'truck': 'car-outline',
  'storefront': 'storefront-outline',
  'megaphone': 'megaphone-outline',
  'globe': 'globe-outline',
};

const ServiceCard = ({ service, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Ionicons 
          name={iconMap[service.icon] || 'help-circle-outline'} 
          size={28} 
          color={colors.accent[500]} 
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{service.name}</Text>
        <Text style={styles.tagline} numberOfLines={2}>{service.tagline}</Text>
        {service.pricing && (
          <View style={styles.pricingBadge}>
            <Text style={styles.pricingText}>{service.pricing.amount}</Text>
          </View>
        )}
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.neutral[400]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.accent[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary[900],
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    color: colors.neutral[600],
  },
  pricingBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  pricingText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ServiceCard;
