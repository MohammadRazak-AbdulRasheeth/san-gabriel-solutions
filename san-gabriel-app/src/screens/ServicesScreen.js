import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import colors from '../constants/colors';

const ServicesScreen = ({ navigation }) => {
  const renderService = ({ item }) => (
    <ServiceCard 
      service={item} 
      onPress={() => navigation.navigate('ServiceDetail', { service: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          From vehicle advertising to fleet branding, we have solutions for every need
        </Text>
      </View>
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary[900],
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.neutral[300],
    lineHeight: 22,
  },
  list: {
    padding: 16,
  },
});

export default ServicesScreen;
