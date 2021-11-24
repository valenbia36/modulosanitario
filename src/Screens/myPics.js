import React, {useRef,useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Picker,Image, Alert, ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Camera from '../Components/Camera';
import SelectDropdown from 'react-native-select-dropdown';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export function myPics({route,navigation}) {
    const categorias=["Croquis encuesta 1",'Foto familia delante de la casa','Baño actual-Inodoro','Baño actual-Pozo/balde',
                        'Contrato de asignación firmado','Ficha inspección de pozos','Módulo Sanitario por dentro','Familia dentro del MS terminado',
                        'Niños/as y adultos cepillándose los dientes/lavándose las manos dentro del MS','Foto carta de donación del MS','Foto carta cesión de imagen']; 
    
    const [selectedCat,setSelectedCat]=useState("")
    const [selectedFamily,setSelectedFamily]=useState("");
    const [imagen,setImage]=useState();
    const [id,setid]=useState();
    const [usercreated,setUser]=useState("no creado");
    const [anim,setAnim] = useState(false);
    const upload = async()=>{
         // let obj={name:route.params.ape,foto:"foto",ubicacion:"Bs as",fotocategorias:selectedCat};
    
        console.log("entre")
        //https://appmoviltp.herokuapp.com/subscribers
        await fetch("https://porfavorbackend.herokuapp.com/crearfamilia",{
             method:'POST',
             headers:{
                 Accept:'application/JSON',
                 'Content-Type':'application/JSON',
             },
             body:JSON.stringify({
                 id:route.params.id,
                 name:route.params.ape,
                 ubicacion:"Bs as",
             })
         })
         .then(response=>response.json())
         .then(success=> {console.log(success)})
         .catch(e=>console.log(e));
        
        
        //console.log(JSON.stringify(imagen));
        //console.log(id)
        let url="https://porfavorbackend.herokuapp.com/single";
        let data=new FormData();
        data.append('image', {uri: imagen.path, name: 'photo.jpg',filename :'imageTest45.jpg',type: 'image/jpeg'});
        data.append('UserID',route.params.id);
        data.append('fotocategoria',selectedCat);
        fetch(url,{method:'POST',
             headers:{
                 'Content-Type':'multipart/form-data'
          },body:data})
    
         .then(response=>response.text())
         .then(success=>{console.log(success);Alert.alert("La foto se subio con exito");setAnim(false);navigation.goBack()})
         .catch(e=>console.log(e));
         

        }

    console.log(route.params)
    return (
        <View style={styles.container}>
           <ActivityIndicator animating={anim} size ={'large'} style={{position:'absolute',top:470,right:180}}/>
            <Camera selectedImage={setImage.bind(this)} ></Camera>
            <View style={styles.pickerCont}>
                <SelectDropdown
                    data={categorias}
                    onSelect={(selectedItem, index) => {
                        //console.log(selectedItem, index)
                        setSelectedCat(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    defaultButtonText={"Seleccionar Catergoria"}
                    buttonStyle={{width:300,borderRadius:20,backgroundColor:'#005f73',}} 
                    buttonTextStyle={{color:'white'}}
                />
                <TouchableOpacity>
                    <Image source={require("../imgs/down_arrow.png")} style={styles.downImg}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.upCont}>
                <TouchableOpacity>
                    <Text style={{color:"white",fontSize:20, alignItems:"center",justifyContent:"center",alignSelf:'center'}} onPress={()=>{setAnim(true);upload()}}>Subir</Text>
                </TouchableOpacity>
            </View>
        


       </View>
    );
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:'#e0fbfc'
    },
    pickerCont:{
        position:'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:510,
    },
    upCont:{
        position:'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#005f73',
        top:650,
        width:200,
        borderRadius:20,

      
    },
    downImg:{
        width:20,
        height:15,
        position:'absolute',
        right:20,
        top:-30,
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
    }
    

});