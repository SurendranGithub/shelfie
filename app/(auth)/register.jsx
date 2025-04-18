import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from '../../components/ThemedButton'

const Register = () => {

    const handleSubmit = () => {
        // Handle register logic here
        console.log("Register form submitted!")
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register for an account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>Register</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Register

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