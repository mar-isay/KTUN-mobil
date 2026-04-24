import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { colors, spacing } from './Theme';

const Duyurular = () => {
    const [duyurular, setDuyurular] = useState([]);
    const [yukleniyor, setYukleniyor] = useState(true);

    useEffect(() => {
        // Backend'den duyuruları çekme simülasyonu
        // Gerçek kullanımda: axios.get('http://localhost:3000/duyurular')
        setTimeout(() => {
            setDuyurular([
                { id: 1, baslik: 'Bahar Dönemi Kayıtları', icerik: 'Kayıtlar 15 Mayıs’ta başlıyor.' },
                { id: 2, baslik: 'KTÜN Tanıtım Günleri', icerik: 'Kampüsümüzde etkinlikler düzenlenecektir.' }
            ]);
            setYukleniyor(false);
        }, 1000);
    }, []);

    if (yukleniyor) return <ActivityIndicator size="large" color={colors.primary} style={{flex:1}} />;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Haberler & Duyurular</Text>
            <FlatList 
                data={duyurular}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.baslik}</Text>
                        <Text style={styles.cardContent}>{item.icerik}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, padding: spacing.medium },
    title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 20 },
    card: { backgroundColor: colors.white, padding: 15, borderRadius: 10, marginBottom: 15, elevation: 2 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: colors.text, marginBottom: 5 },
    cardContent: { color: colors.secondary, lineHeight: 20 }
});

export default Duyurular;