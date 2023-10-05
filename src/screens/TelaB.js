import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function TelaB(props) {

    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 48 }}>TelaB</Text>
            <Button
                title="Ir para Tela C"
                onPress={() => navigation.push('TelaC')}
            />
            <Button
                title="Voltar"
                onPress={() => navigation.goBack('TelaA')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'blue'
    }
})