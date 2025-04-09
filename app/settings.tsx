import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { LayoutScreen } from '@/components/LayoutScreen/LayoutScreen';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  const { theme, setTheme, fontSize, setFontSize, isDark } = useTheme();

  const themeOptions = [
    { label: 'Light', value: 'light', icon: 'sunny-outline' },
    { label: 'Dark', value: 'dark', icon: 'moon-outline' },
    { label: 'System', value: 'system', icon: 'settings-outline' },
  ];

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 1);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 1);
    }
  };

  return (
    <LayoutScreen>
      <View style={styles.container}>
        <ThemedText variant="title" bold>Theme Settings</ThemedText>
        <View style={styles.themeButtons}>
          {themeOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.themeButton,
                theme === option.value && styles.selectedTheme,
                { backgroundColor: isDark ? '#333' : '#f0f0f0' },
              ]}
              onPress={() => setTheme(option.value as 'light' | 'dark' | 'system')}
            >
              <Ionicons 
                name={option.icon as any} 
                size={20} 
                color={isDark ? '#fff' : '#000'} 
              />
              <ThemedText bold style={{ marginTop: 8 }}>{option.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        <ThemedText variant="title" bold style={{ marginTop: 24 }}>
          Font Size
        </ThemedText>
        <View style={styles.fontSizeContainer}>
          <TouchableOpacity
            style={[
              styles.fontSizeButton,
              { backgroundColor: isDark ? '#333' : '#f0f0f0' }
            ]}
            onPress={decreaseFontSize}
          >
            <ThemedText bold>-</ThemedText>
          </TouchableOpacity>

          <View style={styles.fontSizeDisplay}>
            <ThemedText variant="subtitle" bold>{fontSize}</ThemedText>
            <ThemedText variant="caption" center>Font Size</ThemedText>
          </View>

          <TouchableOpacity
            style={[
              styles.fontSizeButton,
              { backgroundColor: isDark ? '#333' : '#f0f0f0' }
            ]}
            onPress={increaseFontSize}
          >
            <ThemedText bold>+</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 24,
  },
  themeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  themeButton: {
    padding: 16,
    borderRadius: 12,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTheme: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  fontSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 20,
  },
  fontSizeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSizeDisplay: {
    alignItems: 'center',
    minWidth: 80,
  },
}); 