import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; 
import { StackNavigatorParamList } from './types';
import { styleLinksHeader, styleLinksShare, styleOneLinkHeader, styles } from './styles';

    

const OneLinksHeader=(props:any)=>{
    return(
      <View>
          <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
      </View>
    );
  };

  
  
  const LinksHeader=()=>{
    return(
        <View style={styleLinksHeader.container}>
            <OneLinksHeader nome="Home"/>
            <OneLinksHeader nome="Post"/>
            <OneLinksHeader nome="Videos"/>
            <OneLinksHeader nome="Photos"/>
            <OneLinksHeader nome="Community"/>
        </View>
    );
  };
  
  
  
   const LinksShare = ()=>{
     return(
       <View style={styleLinksShare.container}>
         <Text style={styleLinksShare.link}><Image source={require("../../assets/link-like.png")}></Image>  Like</Text>
         <Text style={styleLinksShare.link}><Image source={require("../../assets/link-coment.png")}></Image>  Comemnt</Text>
         <Text style={styleLinksShare.link}><Image source={require("../../assets/link-share.png")}></Image>  Share</Text>
       </View>
     );
   };
  
  

   type  HomeProps = NativeStackNavigationProp<StackNavigatorParamList,'Login'>;
const Home = ()=>{
    const navigation = useNavigation<HomeProps>();
    function irParaTelaLogin(){
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require("../../assets/arrow-left.png")}></Image>
        <View style={styles.imputTextView}>
        <Image source={require("../../assets/ei_search.png")}></Image>
        <TextInput style={styles.textImput} placeholder="pesquisar"
        placeholderTextColor="#F5FFFF">
        </TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksHeader></LinksHeader>
      <LinksShare></LinksShare>
      <View style={styles.viewButton} >
            <TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
            <Text style={styles.viewButtontext}>Ir para Tela Login</Text>
            </TouchableOpacity>
        </View>
    </View>
        );
    };  

export default Home;