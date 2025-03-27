import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function sobre() {
  return (
    <View style={styles.container}>
      <Text>Esta é a tela Sobre!</Text>
      <Link href="/">Voltar para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});