import {StyleSheet} from 'react-native';

export const styleOneLinkHeader = StyleSheet.create({
    link:{
      color:"#4A4A4C",
    }
  }); 

export  const styleLinksHeader = StyleSheet.create({
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

/*export  const styleLinksShare = StyleSheet.create ({
    container:{
     flex:1,
     flexDirection:"row",
     justifyContent:"space-between",
     paddingHorizontal:55,
     paddingVertical:19,
     
    },
    link:{
     color:"#4A4A4C",
    },
  });*/

export  const styles = StyleSheet.create({
    container:{
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

    button:{
        backgroundColor:'#4369B0',
        marginHorizontal:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        color:"white",
    },
    viewButton:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:40,
        paddingVertical:40,
    },
    viewButtontext:{
        color:"#F5FFFF",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
    },
  });