import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import ItemBot from './ItemBot'

export default class Horizon extends Component {
    render() {
        return (
            <View  style={styles.horizon}>
                <ItemBot/>
                <ItemBot/>
            </View>
        )
    }
}
 const styles = StyleSheet.create({
     horizon:{
         flex: 4,
    flexDirection: 'row',
     }
    
 })
