import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';


export default function Screen() {
    return (
        <View style={styles.container}>
                 <Text>Bem-vindo à tela inicial!</Text>
                 <Link href="/sobre">Ir para Sobre</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});