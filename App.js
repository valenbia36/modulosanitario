import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';
import { Home } from './src/Screens/Home';
import {myPics} from './src/Screens/myPics';
import { color } from 'react-native-reanimated';
import {Login} from './src/Screens/Login';
import {Search} from './src/Screens/Search';
import {SearchImgs} from './src/Screens/Search-Imgs';




export default function App ({route,navigation}) {
  //var Drawer = createDrawerNavigator();
  var Stack = createNativeStackNavigator();
  const [login,setLogin]=useState(false);

  return (
    <NavigationContainer>
      {login?
      <>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen name="Login" component={Login} screenOptions={{}} options={{
    //transitionSpec: {
    // open: config,
    //close: config,
    //},
  }} />
          <Stack.Screen name="Home" component={Home} options={{gestureEnabled:false}} />
          <Stack.Screen name="myPics" component={myPics} options={{title:"Mis Fotos"}}/>
          <Stack.Screen name="Search" component={Search} options={{title:"Buscar Familias"}}/>
          <Stack.Screen name="Search Imgs" component={SearchImgs} options={{title:"Buscar Imagenes"}}/>
      </Stack.Navigator>
      </>
      :
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} screenOptions={{}} options={{gestureEnabled:false}} />
          <Stack.Screen name="myPics" component={myPics} options={{title:"Mis Fotos"}}/>
          <Stack.Screen name="Search" component={Search} options={{title:"Buscar Familias"}}/>
          <Stack.Screen name="Search Imgs" component={SearchImgs} options={{title:"Buscar Imagenes"}}/>
      </Stack.Navigator>

      }
    </NavigationContainer>
  );
};

