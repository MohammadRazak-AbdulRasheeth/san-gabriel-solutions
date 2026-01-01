import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { companyInfo } from '../data/companyInfo';
import colors from '../constants/colors';

const ContactScreen = ({ route }) => {
  const preselectedService = route?.params?.service;
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Message Sent!', 
        'Thank you for contacting us. We\'ll get back to you within 24 hours.',
        [{ text: 'OK', onPress: () => setForm({ name: '', email: '', phone: '', message: '' }) }]
      );
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.subtitle}>
              Get in touch for a free consultation
            </Text>
          </View>

          {/* Contact Info */}
          <View style={styles.contactInfo}>
            <ContactItem icon="call-outline" text={companyInfo.phone} />
            <ContactItem icon="mail-outline" text={companyInfo.email} />
            <ContactItem icon="time-outline" text={companyInfo.hours.weekdays} />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.formTitle}>Send us a message</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
                placeholder="Your name"
                placeholderTextColor={colors.neutral[400]}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                placeholder="your@email.com"
                placeholderTextColor={colors.neutral[400]}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                placeholder="(555) 123-4567"
                placeholderTextColor={colors.neutral[400]}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Message *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={form.message}
                onChangeText={(text) => setForm({ ...form, message: text })}
                placeholder="Tell us about your project..."
                placeholderTextColor={colors.neutral[400]}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <Button 
              title="Send Message" 
              onPress={handleSubmit}
              loading={loading}
              size="lg"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ContactItem = ({ icon, text }) => (
  <View style={styles.contactItem}>
    <Ionicons name={icon} size={20} color={colors.accent[500]} />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary[900],
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.neutral[300],
  },
  contactInfo: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    fontSize: 15,
    color: colors.neutral[700],
  },
  form: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary[900],
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.neutral[700],
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.neutral[50],
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: colors.neutral[900],
  },
  textArea: {
    minHeight: 120,
  },
});

export default ContactScreen;
