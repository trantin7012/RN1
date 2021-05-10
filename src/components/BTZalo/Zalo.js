import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import History from './History'

export default class Zalo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <History/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 10,
      },
})
