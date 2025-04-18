import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
                headerTitleStyle: { fontWeight: "bold" },
                headerTitleAlign: "center",
            }}>
                {/* Groups */}
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />

                {/* Individual Screens */}
                <Stack.Screen name="index" options={{ headerShown: true, title: "Home" }} />
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})