import React, { Component } from 'react'
import { Text,StyleSheet ,TouchableOpacity,Image } from 'react-native'

export default class IconButton extends Component {
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                {/* <Image source={require('../../assets/images/angry.png')} style={styles.ImageIcon} /> */}
            {/* <Text style={styles.TextIcon}>{this.props.icon}</Text> */}
            <Image  source ={this.props.image} style={styles.ImageIcon} />
                
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    ImageIcon: {
        marginHorizontal: 5,
        width: 50,
        height: 50,

    },
    TextIcon:{
        fontSize:20,
        marginHorizontal: 5,
    }

})
