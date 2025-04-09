import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '@/context/ThemeContext'

export type LayoutScreenProps = ViewProps & {
    lightColor?: string
    darkColor?: string
}

export function LayoutScreen(props: LayoutScreenProps) {
    const { style, lightColor, darkColor, ...otherProps } = props
    const { isDark } = useTheme()
    
    const backgroundColor = isDark 
        ? (darkColor || '#1a1a1a')
        : (lightColor || '#ffffff')
        
    return (
        <View 
            style={[
                styles.container, 
                { backgroundColor }, 
                style
            ]} 
            {...otherProps} 
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

