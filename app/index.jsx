import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer height={20} />

            <ThemedText style={styles.title} title={true}>Hello, World!</ThemedText>

            <Spacer height={10} />
            <ThemedText>Reading List App</ThemedText>
            <Spacer />

            <Link href="/login" style={styles.link}>
                <ThemedText>Login Page</ThemedText></Link>
            <Link href="/register" style={styles.link}><ThemedText>Register Page</ThemedText></Link>
        </ThemedView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
});