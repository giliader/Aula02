import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; 
import { StackNavigatorParamList } from './types';
import { styles } from './styles';

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


export default Login;