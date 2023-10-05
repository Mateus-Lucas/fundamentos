import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function TelaC(props) {

  const navigation = props.navigation
   
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 48}}>TelaC</Text>
      <Button
                title="Voltar"
                onPress={() => navigation.goBack('TelaB')}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'green'
    }
})