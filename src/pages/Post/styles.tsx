import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    componente:{
        flex:1,
        padding:30,
    },
    headerView:{
        flexDirection:'row',
    },
    headerViewFoto:{
        backgroundColor:'#4369B0',
        height:60,
        width:60,
        borderRadius:50,
    },
    headerViewTextos:{
        paddingLeft:20,
        justifyContent:'space-around',
    },
    headerViewTextosTitulo:{
        fontWeight:'bold',
        fontSize:16,
    },
    headerViewImageGlobo:{
        height:17,
        width:17,
        marginLeft:5,
    },
    headerViewTextosHorario:{
        flexDirection:'row',
        alignItems:'center',
    },
    TextoPublicacao:{
        marginTop:20,
        fontSize:15,
    },
    TextoPublicacaoLink:{
        color: '#4D6196',
    },

    headerViewImagePulicacao:{
        width:358,
        height:282,
    },
    likesButton:{
        height:30,
        width:30,
    },
    likes:{
        marginTop:10,
        flexDirection:'row',
    },
    likesText:{
        textAlignVertical:'center',
        paddingLeft:8,
    },
    linkeShare:{
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:20,
        justifyContent:'space-between'
    },
    linkeShareItem:{
        flexDirection:'row',
        alignItems:'center',
    },
    linkeShareItemText:{
        paddingLeft:5,
    },
    viewButton:{
        borderRadius:5,
        flexDirection:'row',



    },
      

    button:{
        flex:5,
        backgroundColor:'#3D7BE2',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    viewButtonText:{
        color: '#FDF7FD',
        fontSize:15,
        height:43,
        textAlignVertical:'center',


    },
    buttonMensager:{
        flex:1,
        backgroundColor: '#3D7BE2',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        borderRadius:5,
    },
    buttonMais:{
        flex:1,
        borderColor: '#3D7BE2',
        borderWidth:1,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
});