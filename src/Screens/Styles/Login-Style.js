import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        top:80
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        marginBottom:10
      },
      backPhoto:{
        position:"absolute",
        alignSelf:'center',
        top:5
        
      },
      signUpText:{
        top:145,
        fontSize:17,
        textAlign:'center',
        justifyContent:'center',
        width:100,
        backgroundColor:'#f2e9e4',
        borderRadius:25,

      },
      Home:{
        //borderRadius:25,
        top:200,
        position:'absolute',
        height:60,
        width:60,
        alignSelf:'center',
        shadowOffset:{
          width:20,
          height:20
        },
        shadowOpacity:20,
        shadowColor:'black'
    }
})