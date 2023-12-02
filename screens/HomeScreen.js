import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function HomeScreeen({navigation}){
    return(
        <View style={Style.container}>
            <Text style={Style.screnText}>HomeScreen</Text>
            <TouchableOpacity style={Style.button}
             onPress={()=>navigation.navigate('Profile')}
            >
                <Text style={Style.buttonText}>Click Button</Text>
            </TouchableOpacity>
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
    },
    button:{
        height:40,
        width:'80%',
        backgroundColor:'#000000',
        margin:10,
        padding:10
    },
    buttonText:{
        color:"#ffffff",
        fontWeight:'500',
        alignSelf:'center'
    }
})

export default HomeScreeen