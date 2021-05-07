import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'

export default class Touched extends Component {
    handleOnPress=param=>{
        console.log(param)
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text> textInComponent </Text>
                {/* Sử dụng callback funcion để gọi param */}
                <TouchableOpacity style={styles.Button} onPress={()=>{this.handleOnPress('RN02')}} >
                    <Text style={styles.TxtButton}>Button</Text>
                </TouchableOpacity>
                <TouchableHighlight style={styles.Button} onPress={this.handleOnPress}>
                <Text style={styles.TxtButton}>Button HighLight</Text>
                </TouchableHighlight>
                <TouchableWithoutFeedback  style={styles.Button} onPress={this.handleOnPress} >  
                <Text style={styles.TxtButton}>TouchableWithoutFeedback</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
// rns
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Button:{
        backgroundColor:'orange',
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:5
        
    },
    TxtButton:{
        fontSize:20,
    }

})
