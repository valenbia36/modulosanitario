import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState,useEffect} from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';
import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Styles/Login-Style';
GoogleSignin.configure({
  webClientId:'',
  androidClientId: '',
});
 export function Login({navigation})
 {
  const [text, onChangeText]=useState("")
  const [login,setLogin]=useState(false);
  const [disable,setDisable]=useState(true);
  const [info,setInfo]=useState(null);
  const [loaded,setLoaded]=useState(false)
  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
  const [show,setShow]=useState('flex')

  function config(){
    GoogleSignin.configure({
      webClientId: '1047986510812-5n6r6d58ub0m4ga8fv8fhtrs13q5oubt.apps.googleusercontent.com',
      androidClientId: '1047986510812-uag36r9mpu11hfum46bfiaaf07fi5dau.apps.googleusercontent.com'
    });
  }

  async function signIn() {

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      jwt = userInfo.idToken
      console.log("Puede pasar a la app: ", userInfo.user.email)
      setInfo(userInfo)
      console.log("aca esta la info de :"+userInfo.user.name)
      setLoaded(true)
      setShow('none')
      setLogin(true)
      return <View>aca</View>
    }
    catch (error) {
      console.log(error)
      return false
    }
  };
config()
return (
  <View style={styles.container}>
    <Image source={require('../imgs/Logo-modulo.png')} style={styles.backPhoto} resizeMode={'center'}/>
<GoogleSigninButton
onPress={()=>{signIn()}}
size={GoogleSigninButton.Size.Wide}
disabled={login}
style={{display:show}}
/>
{loaded ?
  <View style={{}}>
    <Text>{info.user.name}</Text>
    <Text>{info.user.email}</Text>
    <Image
    style={{width: 90, height: 85, alignItems:'center',position:'absolute',borderRadius:50,right:155,bottom:-22}}
    source={{uri:info.user.photo}}
    />
    <TouchableOpacity onPress={()=>{navigation.navigate("Home",{login,})}} >
      <Image source={require('../imgs/home.png')} style={styles.Home} onPress={()=>{navigation.navigate("Home",{login})}} ></Image>
    </TouchableOpacity>
  </View> :
  <Text></Text>}
  </View>
  
);
}



