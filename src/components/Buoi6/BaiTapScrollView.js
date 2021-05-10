import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'

export default class BaiTapScrollView extends Component {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    renderItem = () => {
        return this.array.map(item => (
            <View style={styles.item} >
                
                <Text>color {item}</Text>
            </View>
        ))
    }

    render() {

        return (
            <View style={styles.screenContainer}>
                 <ScrollView >
                
                {this.renderItem()}
              
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    item: {
        marginBottom: 20,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#${Math.floor(Math.random() * 215).toLocaleString(16,)}`,
        borderRadius:10,

        
    },
}

);

