import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from './Theme'; 

const ProfilEkrani = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>KTÜN Dijital Kimlik</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Ad Soyad:</Text>
                    <Text style={styles.value}>Issa / Mar-isay</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Öğrenci No:</Text>
                    <Text style={styles.value}>20260XXXX</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Durum:</Text>
                    <Text style={[styles.value, {color: 'green'}]}>Aktif Öğrenci</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, padding: spacing.medium, justifyContent: 'center' },
    card: { backgroundColor: colors.white, borderRadius: 15, padding: spacing.large, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1 },
    header: { fontSize: 22, fontWeight: 'bold', color: colors.primary, textAlign: 'center', marginBottom: 25, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10 },
    infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    label: { color: colors.secondary, fontWeight: '600', fontSize: 16 },
    value: { color: colors.text, fontWeight: 'bold', fontSize: 16 }
});

export default ProfilEkrani;