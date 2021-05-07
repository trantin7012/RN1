import React, { Component } from 'react'
import { Text,StyleSheet ,TouchableOpacity,Image } from 'react-native'

export default class IconButton extends Component {
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity style={styles.ButtonContainer} onPress={() => {this.props.onPressIcon(this.props.image)}}>
                {/* <Image source={require('../../assets/images/angry.png')} style={styles.ImageIcon} /> */}
            {/* <Text style={styles.TextIcon}>{this.props.icon}</Text> */}
            {/* <Image  source ={this.props.image} style={styles.ImageIcon} /> */}
                <Image style={styles.ImageIcon} source={this.props.image}/>
                
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
    ButtonContainer: {
        marginTop: 15,
        flexDirection: 'row'

    },
    TextIcon:{
        fontSize:20,
        marginHorizontal: 5,
    }

})
