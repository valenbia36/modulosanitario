import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    inputView:{
        //position:'absolute',
        width:"80%",
        backgroundColor:"#90e0ef",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        top:"20%"
      },
      inputText:{
        height:50,
        color:"white"
      },
      titulo:{
          top:"10%",
          fontSize:14,
          fontWeight:"900"
      },
      sumbitContainer:{
        top:'-10%',


      },
      sumbit:{
        alignItems:"center",
        justifyContent:"center",
        alignContent:'center',
        textAlign:'center',

      },
      sumbitText:{
        width:150,
        backgroundColor:"#0096c7",
        borderRadius:25,
        height:50,
        color:'white',
        alignItems:"center",
        justifyContent:"center",
        textAlign:'center',
        textAlignVertical:'center',
        top:300,
        fontSize:17
      },
      pickerCont:{
        position:'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:"35%",
      },
      ButtonImg:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        bottom:95,
        right:"-40%",
        borderRadius:5,
        backgroundColor:'white'

    },
    img:{
        width:30,
        height:30,

    },
    ButtonImg2:{
      alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        bottom:70,
        right:"-40%",
        borderRadius:5,
        backgroundColor:'white'

    },
    img2:{
      width:30,
        height:30,

    },
    ButtonImg3:{
      alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:25,
        height:25,
        bottom:157,
        right:"-40%",
        borderRadius:5,
        backgroundColor:'white',
        right:10

    },
    img3:{
      width:25,
        height:25,

    }
})