import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState,useEffect} from 'react';
//probar el sexto
import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FlatList } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';




export  function SearchImgs({route,navigation}){
    const [text, onChangeText]=useState("");
    const [text2, onChangeText2]=useState("");
    const [fotos,setFotos]=useState();
    const [Usuario,setUsuario]=useState("");
    const [visible,setVisible]=useState(false);
    const [Imagen,setImagen]=useState("");
    const criterio=["Apellido","Ubicacion"];
    const [anim,setAnim]=useState(false)
    const [refresh,setRefresh]=useState(1);
    async function eliminar(nombreImg){
      fetch('https://porfavorbackend.herokuapp.com/delete',{
        method:'POST',
        headers:{
            Accept:'application/JSON',
            'Content-Type':'application/JSON',
        },
    body:JSON.stringify({
      file:nombreImg,
      UserID:route.params.id
       })
    }).then(response=>response.text())
    .then(response => {console.log(response);
    actualizar();Alert.alert("Foto borrada con exito")})
      .catch(e=>console.log(e));
    }
    useEffect(() => {
      setAnim(true);
      actualizar();
      
    },[]);
    function actualizar(){
      fetch("https://porfavorbackend.herokuapp.com/Foto/"+route.params.id,{method:"GET"}).then(response => response.json())
      .then(response=>{console.log(response);setImagen(response);setAnim(false)})
      //console.log('https://porfavorbackend.herokuapp.com/download/'+Imagen.foto);
      
    }


   

    return(
        <View style={styles.container}>
          {
           // <Text>{route.params.id}</Text>
          }
            <ActivityIndicator animating={anim} size={'large'} style={{top:350}}/>

            <FlatList data={Imagen}  style={styles.flatList} renderItem={({ item }) => (
                        <View style={{alignContent:'center',padding:20}}>
                        <Image source={{uri:"https://porfavorbackend.herokuapp.com/download/"+item.foto}} style={{width:120,height:110,alignSelf:'center'}}/>
                        <Text style={{padding:10,fontSize:16,alignSelf:'center',fontWeight:'900'}}>Categoria:{item.fotocategoria}</Text>
                          
                      <TouchableOpacity onPress={()=>{eliminar(item.foto);setRefresh(refresh+1)}} style={styles.delete} >
                          <Image source={require("../imgs/delete.png")} style={{height:35,
        width:30}}/>
                      </TouchableOpacity>
                         <TouchableOpacity style={styles.map}>
                           <Image source={require("../imgs/mapa.png")} style={{height:35,
        width:30}} />
                       </TouchableOpacity>
                       </View>
                      

                    )}/>

              <View style={styles.Caja}>


              </View>
        </View>

    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

      Caja:{
        width:150,
        //backgroundColor:"#0096c7",
        height:150,
        bottom:"20%",
        left:"0%",
        alignSelf:'center'

      },
      flatList:{
        //flex:1,
        height:500


      },
      delete:{
        height:30,
        width:30,
        left:100,
        //top:161,
        //padding:10
      },
      map:{
        position:'absolute',
        height:35,
        width:30,
        top:-32,
        top:171,
        left:200

      },
      img:{
        //top:10
      }

      
})