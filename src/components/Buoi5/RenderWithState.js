import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class RenderWithState extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLogin : false
        }
    }
    // state={
    //     isLogin : false
    // }
    

    handleLogin=()=>{
    //    Cap Nhat this.setState bat dong bo
    this.setState({
        isLogin :true
    },
    //log ra duoc gia tri sau ham setState duoc thuc thi
    ()=>{
        console.log(this.state.isLogin)
    })
       
        // console.log(this.state.isLogin)
    }
    handleLogout=()=>{
        this.setState({

            isLogin :false
        })
           
            // console.log(this.state.isLogin)
        }
    renderLogin = () => {

        if(this.state.isLogin){
            return(
                <>
                <TouchableOpacity style={styles.Button} onPress={this.handleLogout}>
                    <Text style={styles.TextStyle}>Log out</Text>
                </TouchableOpacity>
            </>
            )
        }
        return ((<TouchableOpacity style={styles.Button}onPress={this.handleLogin}>
            <Text style={styles.TextStyle}>Log in</Text>
        </TouchableOpacity>)

        )
    }
    render() {
        return (
            <View style={styles.Container}>
                {this.renderLogin()}
                {/* {this.login ?():()} */}
                {/* {this.isLogin ? (
               )
                 : } */}

                
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
    Button: {
        backgroundColor: 'pink',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8
    },
    TextStyle: {
        fontSize: 20
    }


})
