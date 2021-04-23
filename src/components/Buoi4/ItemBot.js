import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ItemBot extends Component {
    render() {
        return (
            <View style={styles.itemBot}>
                <Text> textInComponent </Text>
            </View>
        )
      
    }
}
 const styles = StyleSheet.create({
     itemBot:{
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#4f82c0',
        marginBottom: 40,
    
        marginHorizontal: 20,

     }
 })
