import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function TelaA(props) {

    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 48 }}>TelaA</Text>
            <Button
                title="Ir para Tela B"
                onPress={() => navigation.navigate('TelaB')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red'
    }
})