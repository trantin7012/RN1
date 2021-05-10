import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LoveIcon, HahaIcon, SadIcon, AngryIcon, LikeIcon } from '../../assets/index'
import IconButton from '../Buoi6/IconButton';

export default class RenderWithMap extends Component {
    state = {
        icon: LoveIcon,
    };
    arrayIcon =[LoveIcon,HahaIcon, SadIcon, AngryIcon, LikeIcon]
    handleOnPressIcon = icon => {
        this.setState({ icon });
    };

    render() {
        return (
            <View style={styles.Container}>
                <Image source={this.state.icon} />
                <View style={styles.ButtonContainer}>
                    {this.arrayIcon.map((icon,index)=>{
                        return <IconButton key={index} image={icon} onPressIcon={this.handleOnPressIcon}/>
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonContainer: {
        marginTop: 50,
        flexDirection: 'row',
    },
    ButtonIcon: {
        marginHorizontal: 5,
        height: 50,
        width: 50,
    },
});
