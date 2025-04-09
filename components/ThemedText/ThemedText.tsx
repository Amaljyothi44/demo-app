import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export interface ThemedTextProps extends TextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  color?: string;
  fontSize?: number;
  bold?: boolean;
  center?: boolean;
  marginBottom?: number;
}

export function ThemedText({
  style,
  variant = 'body',
  color,
  fontSize,
  bold,
  center,
  marginBottom,
  ...props
}: ThemedTextProps) {
  const { isDark, fontSize: themeFontSize } = useTheme();
  
  // Default colors based on theme
  const defaultTextColor = isDark ? '#fff' : '#000';
  const defaultSubtitleColor = isDark ? '#ccc' : '#666';
  const defaultCaptionColor = isDark ? '#999' : '#888';
  
  // Font size adjustments based on variant
  const getFontSize = () => {
    if (fontSize) return fontSize;
    
    switch (variant) {
      case 'title':
        return themeFontSize + 8;
      case 'subtitle':
        return themeFontSize + 4;
      case 'caption':
        return themeFontSize - 2;
      case 'body':
      default:
        return themeFontSize;
    }
  };
  
  // Font weight based on variant or bold prop
  const getFontWeight = () => {
    if (bold) return 'bold';
    
    switch (variant) {
      case 'title':
      case 'subtitle':
        return 'bold';
      default:
        return 'normal';
    }
  };
  
  // Line height based on font size
  const getLineHeight = () => {
    const size = getFontSize();
    return size * 1.4;
  };
  
  // Letter spacing based on variant
  const getLetterSpacing = () => {
    switch (variant) {
      case 'title':
        return 0.5;
      case 'subtitle':
        return 0.3;
      default:
        return 0;
    }
  };
  
  // Text color based on variant
  const getTextColor = () => {
    if (color) return color;
    
    switch (variant) {
      case 'subtitle':
        return defaultSubtitleColor;
      case 'caption':
        return defaultCaptionColor;
      default:
        return defaultTextColor;
    }
  };
  
  return (
    <Text
      style={[
        styles.text,
        {
          color: getTextColor(),
          fontSize: getFontSize(),
          fontWeight: getFontWeight(),
          lineHeight: getLineHeight(),
          letterSpacing: getLetterSpacing(),
          textAlign: center ? 'center' : 'left',
          marginBottom: marginBottom || (variant === 'title' ? 16 : variant === 'subtitle' ? 12 : 8),
        },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: undefined, // Use system font
  },
}); 