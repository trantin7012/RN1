import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class DemoFlatList extends Component {
    array = [{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},]

    // renderItem = () => {
    //     return this.array.map((item, index) => {
    //         return (
    //             <View style={[styles.item, { backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }]} key={index}>
    //                 <Text>Item {item}</Text>
    //             </View>
    //         )
    //     })
    // }
    //Boc tach item
        renderItem=({item})=>(
<View style={[styles.item, { backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }]}>
                        <Text>Item {item.id}</Text>
                    </View>
        )

    render() {
        return (
            // <ScrollView style={styles.container}>{this.renderItem()}</ScrollView>
            <View style={styles.container}>
                <FlatList
                refreshing = {true}
                onRefresh={()=> console.log('Refresh')}
                data={this.array}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
                />
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    item: {
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:20

    }
})
