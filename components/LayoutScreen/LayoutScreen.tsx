import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export type LayoutScreenProps = ViewProps & {
    lightColor?: string
    darkColor?: string
}

export function LayoutScreen(props: LayoutScreenProps) {
    const { style, lightColor, darkColor, ...otherProps } = props
    const darkThemeColor = darkColor
    const lightThemeColor = lightColor
    const backgroundColor = "#ffffff"
    return (
        <View style={[styles.container, { backgroundColor }, style]} {...otherProps} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

