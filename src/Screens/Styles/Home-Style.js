import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e0fbfc',
    },
    containermisF:{
        //flex:1,
        //width:150,
        alignItems:'center',
        alignSelf:"center",
        justifyContent:'center',
        alignContent:'center',
        //top:300,
        flexDirection:'row',

        
    },
    misF:{
        //flex:1,
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:150,
        height:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:"80%",
        //right:5,
    },
    title:{
        alignSelf:'center',
        top:50,
        fontSize:20,
        fontWeight:'900'
    },
    logo:{
        position:"absolute",
        alignSelf:'center'
    },
    buscar:{
        //flex:1,
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:150,
        height:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        top:"80%",
        //left:5,
    },
    containerBuscImgs:{
        alignItems:'center',
        alignSelf:"center",
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:150,
        height:30,
        top:"50%",


    },

    buscarImgs:{
        
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',

    },


});