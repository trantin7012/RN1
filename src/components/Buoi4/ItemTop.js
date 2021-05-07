import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

//rnc
export default class ItemTop extends Component {
    render() {
        return (
            <View style={styles.itemTop}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    itemTop:{
        
            flex: 1,
            borderRadius: 20,
        
            backgroundColor: '#ffffc2',
            marginVertical: 40,
        
            marginHorizontal: 20,
            
          
    }
})
