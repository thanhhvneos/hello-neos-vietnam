import React from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'

const App = () => {
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowOffset: {
                height: 4
            }
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold'
            }}>NEOS VIETNAM</Text>
        </View>

        <TextInput
            style={{
                marginTop: 30,
                marginHorizontal: 20,
                height: 50,
                borderWidth: 1,
                borderColor: '#E3E3E3',
                borderRadius: 4,
                textAlign: 'center',
                fontSize: 16
            }}
            placeholder='type a name here'
            autoCorrect={false}
        />

    </SafeAreaView>
}

export default App