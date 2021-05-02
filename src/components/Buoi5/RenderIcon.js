import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import IconButton from './IconButton'

export default class RenderIcon extends Component {
    state = {
        icon: require('../../assets/images/angry.png')

    }
    handleOnPressIcon = (icon) => {
        console.log(icon)
        this.setState({
            icon
        })
    }

    render() {
        return (
            <View style={styles.Container}>
                <Text> Tâm Trạng  </Text>
                <Image source={this.state.icon} />

                <View style={styles.ButtonContainer}>
                    <IconButton image={require('../../assets/images/care.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/care.png'))} />
                    <IconButton image={require('../../assets/images/love.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/love.png'))} />
                    <IconButton image={require('../../assets/images/angry.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/angry.png'))} />
                    <IconButton image={require('../../assets/images/like.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/like.png'))} />
                    <IconButton image={require('../../assets/images/sad.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/sad.png'))} />
                    <IconButton image={require('../../assets/images/haha.png')} onPress={() => this.handleOnPressIcon(require('../../assets/images/haha.png'))} />

                    {/* <TouchableOpacity onPress={() => this.handleOnPressIcon(require('../../assets/images/care.png'))}>
                        <Image source={require('../../assets/images/care.png')} style={styles.ImageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleOnPressIcon(require('../../assets/images/haha.png'))}>
                        <Image source={require('../../assets/images/haha.png')} style={styles.ImageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleOnPressIcon(require('../../assets/images/like.png'))}>
                        <Image source={require('../../assets/images/like.png')} style={styles.ImageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../assets/images/love.png')} style={styles.ImageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../assets/images/sad.png')} style={styles.ImageIcon} />
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonContainer: {
        marginTop: 15,
        flexDirection: 'row'

    },
    ImageIcon: {
        marginHorizontal: 5,
        width: 50,
        height: 50,

    }

})

