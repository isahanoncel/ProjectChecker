import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

const ProjectItem = (props) => {
  return(
    <View style={[styles.projectItemContainer,{backgroundColor:props.styleColor}]}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    projectItemContainer:{
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:'#f9f9f9',
        marginHorizontal:20,
        marginTop:10
    },
    text:{
        fontSize:23,
        textAlign:'center'
    }
});

export default ProjectItem;