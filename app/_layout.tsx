import { Stack } from 'expo-router';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';

// Create a component that will use the theme context
function ThemedLayout() {
  const { isDark } = useTheme();
  
  return (
    <>
      <StatusBar 
        backgroundColor={isDark ? '#1a1a1a' : '#ffffff'} 
        barStyle={isDark ? 'light-content' : 'dark-content'} 
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          },
          headerTintColor: isDark ? '#ffffff' : '#000000',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Home',
          }} 
        />
        <Stack.Screen 
          name="settings" 
          options={{ 
            title: 'Settings',
          }} 
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}
