import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Profile(){
    return(
        <View style={Style.container}>
            <Text style={Style.screnText}>Profile</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    screnText:{
        fontSize:18
    }
})

export default Profile