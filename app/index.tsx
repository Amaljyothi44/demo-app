import React, { useLayoutEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native'
import { LayoutScreen } from '@/components/LayoutScreen/LayoutScreen';
import { useTheme } from '@/context/ThemeContext';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  const { isDark } = useTheme();
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          style={[
            styles.settingsButton,
            { backgroundColor: isDark ? '#333' : '#f0f0f0' }
          ]}
          onPress={() => router.push('/settings')}
        >
          <Ionicons 
            name="settings-outline" 
            size={24} 
            color={isDark ? '#fff' : '#000'} 
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isDark]);

  return (
    <LayoutScreen>
      <ScrollView style={styles.content}>
        <View style={[
          styles.card,
          { backgroundColor: isDark ? '#333' : '#fff' }
        ]}>
          <ThemedText variant="title" bold>Welcome, DEV Team</ThemedText>
          <ThemedText variant="subtitle" style={styles.welcomeText}>
            This is a modern interface with theme support and dynamic font sizing.
          </ThemedText>
        </View>

        <View style={[
          styles.card,
          { backgroundColor: isDark ? '#333' : '#f8f9fa' }
        ]}>
          <ThemedText variant="title" bold>Features</ThemedText>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <View style={[
                styles.iconContainer,
                { backgroundColor: isDark ? '#444' : '#e9ecef' }
              ]}>
                <Ionicons 
                  name="color-palette-outline" 
                  size={20} 
                  color={isDark ? '#fff' : '#000'} 
                />
              </View>
              <ThemedText bold>Theme Support</ThemedText>
            </View>
            <View style={styles.featureItem}>
              <View style={[
                styles.iconContainer,
                { backgroundColor: isDark ? '#444' : '#e9ecef' }
              ]}>
                <Ionicons 
                  name="text-outline" 
                  size={20} 
                  color={isDark ? '#fff' : '#000'} 
                />
              </View>
              <ThemedText bold>Dynamic Font Size</ThemedText>
            </View>
            <View style={styles.featureItem}>
              <View style={[
                styles.iconContainer,
                { backgroundColor: isDark ? '#444' : '#e9ecef' }
              ]}>
                <Ionicons 
                  name="save-outline" 
                  size={20} 
                  color={isDark ? '#fff' : '#000'} 
                />
              </View>
              <ThemedText bold>Persistent Settings</ThemedText>
            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    marginTop: 8,
  },
  featureList: {
    gap: 20,
    marginTop: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
