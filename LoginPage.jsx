import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from './Theme'; // Aşama 4'te oluşturduğumuz tema [cite: 23]

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>KTÜN Mobil Giriş</Text>
            <TextInput 
                style={styles.input} 
                [cite_start]placeholder="E-posta (@ktun.edu.tr)" // KTÜN formatı doğrulama yapılacak [cite: 18]
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Şifre" 
                secureTextEntry 
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: spacing.large, backgroundColor: colors.background },
    title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: colors.secondary, padding: 10, borderRadius: 8, marginBottom: 15 },
    button: { backgroundColor: colors.primary, padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: colors.white, fontWeight: 'bold' }
});

export default LoginPage;