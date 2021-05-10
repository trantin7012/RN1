import React, { Component } from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class DemoSectionList extends Component {
   DATA = [
        {
          title: "Main dishes",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Sides",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Drinks",
          data: ["Water", "Coke", "Beer"]
        },
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
        {
          title: "Desserts",
          data: ["Cheese Cake", "Ice Cream"]
        }
      ];

      renderItem = ({item})=>(
          <View style={styles.itemContent}>
              <Text style={styles.itemHeaderTxt}>
                {item}
              </Text>
          </View>
      )
      //Boc tach title bang section
      renderItemHeader= ({section:{title}}) =>{
        return <Text style={styles.itemHeaderTxt}>
            {title}
            <Icon name="dingding" size={30} color="#900" />
            {/* <Icon name="dingding" size={30}></Icon> */}
            </Text>
      }

    render() {
        return (
            <View style={styles.container}> 
                <SectionList
                sections={this.DATA}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=> index.toString()}
                renderSectionHeader={this.renderItemHeader}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingVertical:50,
        paddingHorizontal:20
    },
    itemContent:{
        padding:15
    },
    itemHeaderTxt:{
        fontSize:36,
        fontWeight:'bold',

    }
    
})

