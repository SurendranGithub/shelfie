import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";

const Login = () => {
    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

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
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 30
    },
})