import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';

type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeType;
  isDark: boolean;
  fontSize: number;
  setTheme: (theme: ThemeType) => void;
  setFontSize: (size: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>('system');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Load saved preferences
    const loadPreferences = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        const savedFontSize = await AsyncStorage.getItem('fontSize');
        
        if (savedTheme) setTheme(savedTheme as ThemeType);
        if (savedFontSize) setFontSize(Number(savedFontSize));
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    };

    loadPreferences();
  }, []);

  const isDark = theme === 'system' 
    ? systemColorScheme === 'dark'
    : theme === 'dark';

  const value = {
    theme,
    isDark,
    fontSize,
    setTheme: async (newTheme: ThemeType) => {
      setTheme(newTheme);
      try {
        await AsyncStorage.setItem('theme', newTheme);
      } catch (error) {
        console.error('Error saving theme:', error);
      }
    },
    setFontSize: async (newSize: number) => {
      setFontSize(newSize);
      try {
        await AsyncStorage.setItem('fontSize', newSize.toString());
      } catch (error) {
        console.error('Error saving font size:', error);
      }
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 