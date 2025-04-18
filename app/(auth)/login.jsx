import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from '../../components/ThemedButton'


const Login = () => {

    const handleSubmit = () => {
        // Handle login logic here
        console.log("Login form submitted!")
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>Login</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: "center" }}>Register instead</ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 30
    },
})