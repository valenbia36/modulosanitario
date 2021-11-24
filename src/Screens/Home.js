import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,useEffect,useState} from 'react';

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
import {styles} from './Styles/Home-Style';

export function Home({route,navigation}) {
    //const {email}=route.params;
    const {email}=route.params
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:3000,
            useNativeDriver:true
        }).start();
    },[fadeAnim])



    return (
        <View style={styles.container}>
            <Image source={require('../imgs/Logo-modulo.png')} resizeMode={'center'} style={styles.logo} />
            <Animated.View style={{opacity:fadeAnim}} >
                <Text style={styles.title}>Bienvenido {JSON.stringify(email)}</Text>
            </Animated.View>
            <View style={styles.containermisF}>
                {/*<TouchableOpacity title="Mis Fotos" onPress={()=>navigation.navigate("myPics")} style={styles.misF}>
                    <Text style={{fontWeight:'900',fontSize:14,}}>Subir o tomar foto</Text>
    </TouchableOpacity>*/}
                <TouchableOpacity title="Buscar Familias" style={styles.buscar} onPress={()=>navigation.navigate("Search")} >
                    <Text style={{fontWeight:'900',fontSize:14,}}>Buscar Familias</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}