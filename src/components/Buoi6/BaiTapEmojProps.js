import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LoveIcon, HahaIcon, SadIcon, AngryIcon, LikeIcon } from '../../assets/index'
import IconButton from '../Buoi6/IconButton';

export default class BaiTapEmojProps extends Component {
    state = {
        icon: LoveIcon,
    };
    arryIcon =[LoveIcon,HahaIcon, SadIcon, AngryIcon, LikeIcon]
    handleOnPressIcon = icon => {
        this.setState({ icon });
    };

    render() {
        return (
            <View style={styles.Container}>
                <Image source={this.state.icon} />
                <View style={styles.ButtonContainer}>
                    <IconButton image={LoveIcon} onPress={this.handleOnPressIcon}/>
                    <IconButton image={HahaIcon}onPress={this.handleOnPressIcon}/>
                    <IconButton image={AngryIcon}onPress={this.handleOnPressIcon}/>
                    <IconButton image={SadIcon}onPress={this.handleOnPressIcon}/>
                    <IconButton image={LikeIcon}onPress={this.handleOnPressIcon}/>
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
