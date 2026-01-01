import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.primary[900],
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: '600',
  },
};

// Services Stack
const ServicesStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="ServicesList" component={ServicesScreen} options={{ title: 'Services' }} />
    <Stack.Screen 
      name="ServiceDetail" 
      component={ServiceDetailScreen} 
      options={({ route }) => ({ title: route.params?.service?.name || 'Service' })}
    />
  </Stack.Navigator>
);

// Main Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Services':
            iconName = focused ? 'grid' : 'grid-outline';
            break;
          case 'Contact':
            iconName = focused ? 'mail' : 'mail-outline';
            break;
          case 'About':
            iconName = focused ? 'information-circle' : 'information-circle-outline';
            break;
          default:
            iconName = 'help-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.accent[500],
      tabBarInactiveTintColor: colors.neutral[400],
      tabBarStyle: {
        backgroundColor: colors.white,
        borderTopColor: colors.neutral[200],
        paddingBottom: 5,
        paddingTop: 5,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500',
      },
      headerStyle: {
        backgroundColor: colors.primary[900],
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: '600',
      },
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'San Gabriel Solutions' }}
    />
    <Tab.Screen 
      name="Services" 
      component={ServicesStack} 
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Contact" component={ContactScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
  </Tab.Navigator>
);

// Root Navigator
const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
