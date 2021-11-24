import React, {useRef,useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';


export default function Camera (props){
    const imgs=[];
    const [source,setSource]=useState(null);

    
        return (
            <View style={styles.containerBimg}>
                    <TouchableOpacity style={styles.ButtonImg} onPress={() => {
                        ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true,
                          }).then(image => {
                              imgs.push(image);
                              setSource(image.path)
                              props.selectedImage(image);
                            //console.log(image.path);
                          }).catch(e => console.error(e));
                    }}>
                    <Image source={require('../camera.png')}  style={styles.img}/>
                    </TouchableOpacity>
                <View style={styles.img2Cont}>
                    <Image source={{uri:source}} style={styles.img2} />
                </View>
                </View>
        )
        
    }





const styles=StyleSheet.create({
    containerBimg:{
        justifyContent:"center",
        alignItems:'center',
        //paddingLeft:250,
        //paddingTop:500,
        backgroundColor:'#e0fbfc',
        alignSelf:'flex-end',
        marginTop:500,
        marginRight:50
    },
    ButtonImg:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:46,
        height:46,
        backgroundColor:'#0096c7',
        borderRadius:20,
        top:-60

    },
    img:{
        width:40,
        height:40,
        //borderRadius:15,
    },
    img2:{
        //flex:1,
        width:300,
        height:300,
        //alignSelf:'center',
        //justifyContent:'center',
        //alignItems:'center',
        resizeMode:"contain",
    },
    img2Cont:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        bottom:450,
        //left:"50%"

    }
});

