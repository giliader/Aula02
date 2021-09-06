import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const OneLinksHeader=(props:any)=>{
  return(
    <View>
        <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
    </View>
  );
};
const styleOneLinkHeader = StyleSheet.create({
  link:{
    color:"#4A4A4C",
  }
}); 

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

const styleLinksHeader = StyleSheet.create({
  container:{
    color:"white",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:35,
    paddingVertical:10,
    borderBottomColor:"#F0F0F0",
    borderBottomWidth:0.5,

  },
}); 



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require("./src/assets/arrow-left.png")}></Image>
        <View style={styles.imputTextView}>
        <Image source={require("./src/assets/ei_search.png")}></Image>
        <TextInput style={styles.textImput} placeholder="pesquisar"
        placeholderTextColor="#F5FFFF">
        </TextInput>
        </View>
        <Image source={require("./src/assets/share.png")}></Image>
      </View>
      <LinksHeader></LinksHeader>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  header:{
    minHeight:70,
    backgroundColor:'#4369B0',
    paddingVertical:30,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:30,
    paddingTop:50,
  },
  imputTextView:{
    flex:1,
    borderRadius:28,
    backgroundColor:"#2C4877",
    marginHorizontal:10,
    height:40,
    alignItems:"center",
    flexDirection:"row",
  },
  textImput:{
    flex:1,
    paddingRight:10,
    color:'#F5FFFF',
  },
});
