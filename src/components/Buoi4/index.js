import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Horizon from './Horizon';
import ItemTop from './ItemTop'
export default class Buoi3 extends Component {
  render() {
    const textAvatar = 'Ok';
    const iShowHide = true
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.colorGreen]}>
          {iShowHide === true 
        ?
            <Image style={styles.Image}
              // source={{uri:'https://cdn.tgdd.vn/2021/02/CookProduct/Untitled-1-1200x676-4.jpg'}}
              source={require('./image.jpg')}
            />
            :
            <Text style={styles.textAvatar}>{textAvatar}</Text>
          }

          {/* Binding Data */}


          {/* <View style={[styles.box, styles.colorYellow]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.box, styles.colorYellow]}>
          <Text>Yellow</Text>
        </View> */}

        </View>
        <View style={[styles.box, styles.colorPurple]}>
          <Text >Purple</Text>
          {/* <View style={styles.Horizon}>
        <View style={[styles.box, styles.colorBlue]}></View>
        <View style={[styles.box, styles.colorBlue]}></View>
        </View>
        <View style={styles.Horizon}>
        <View style={[styles.box, styles.colorBlue]}></View>
        <View style={[styles.box, styles.colorBlue]}></View>
        </View> */}

          <Horizon />
          <Horizon />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,

  },
  box: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textAvatar: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Horizon: {
    flex: 4,
    flexDirection: 'row',
  },

  colorGreen: {
    backgroundColor: '#A1c99A',
    marginBottom: 20,
  },
  colorPurple: {
    backgroundColor: '#c8c8fA'
  },
  colorYellow: {
    backgroundColor: '#ffffc2',
    marginVertical: 40,

    marginHorizontal: 20,

  },
  colorBlue: {
    backgroundColor: '#4f82c0',
    marginBottom: 40,

    marginHorizontal: 20,

  }

})