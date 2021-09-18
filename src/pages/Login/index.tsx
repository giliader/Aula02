import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; 
import { StackNavigatorParamList } from './types';

    type  LoginProps = NativeStackNavigationProp<StackNavigatorParamList,'Home'>;
const Login = () => {
    const navigation = useNavigation<LoginProps>();
    function irParaTelaHome(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.texto}>Facebook</Text> 

            <View style={styles.imputTextView}>
            <TextInput style={styles.textImput} placeholder="Email"
            placeholderTextColor="#A19FA1">
            </TextInput> 
        
            </View>
        
        <View style={styles.imputTextView1}>
        <TextInput style={styles.textImput} placeholder="Password"
            placeholderTextColor="#A19FA1">
            </TextInput>
        </View>

        <View>
            <TouchableOpacity style={styles.button} onPress={irParaTelaHome}>
            <Text style={styles.textbutton}>Log In</Text>
            </TouchableOpacity>
        </View>
        
        <View>
            <TouchableOpacity style={styles.buttonsquece} onPress={()=>console.log("Não funciona ainda.")}>
                <Text style={styles.textbuttonsquece}>Sing Up for FaceBook </Text>
            </TouchableOpacity>
            

        </View>

     </View>
    );

};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#4369B0',
    },
 
    texto:{  
    color:"white",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:40,
    lineHeight:49,
    top:190,
    left:98,
    
    
    },
    textImput:{
        backgroundColor:"white",
        paddingHorizontal:10,
        height:48,
    
    },
        
    imputTextView:{
        marginHorizontal:15,
        top:321,
    },

    imputTextView1:{
        marginHorizontal:15,
        top:360,
    },

    button:{
        backgroundColor:"#213873",
        marginHorizontal:15,
        top:405,
        height:48,
        alignItems:"center",
        justifyContent:"center",
    },
    textbutton:{
        color:"white",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:25,
        lineHeight:29,
        letterSpacing:0.03,
        
    },
    buttonsquece:{
        top:550,
        alignItems:"center",
        justifyContent:"center",
    },
    textbuttonsquece:{
        color:"white",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        textDecorationLine:"underline",
        letterSpacing:0.03,
    },

});
export default Login;