import React from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export const Post = () =>{
    return(
        <View style={styles.componente}>
            <View style={styles.headerView}>
                <View style={styles.headerViewFoto}>
                
                </View>
                <View style={styles.headerViewTextos}>
                    <Text style={styles.headerViewTextosTitulo}>Unblast</Text>
                    
                    <View style={styles.headerViewTextosHorario}>
                        <Text>2hrs</Text>
                        <Image 
                            style={styles.headerViewImageGlobo} 
                            source={require('../../assets/globo.png')} 
                            />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.TextoPublicacao}>
                    Este é o design que vamos replicar hoje na aula: <Text style={styles.TextoPublicacaoLink}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
                </Text>
                
                <Image 
                            style={styles.headerViewImagePulicacao} 
                            source={require('../../assets/image.png')} 
                            />
            </View>
            <View style={styles.likes}>
                <Image style={styles.likesButton}  source={require('../../assets/likes.png')}/>
                <Text style={styles.likesText}>12</Text>
            </View>

            <View style={styles.linkeShare}>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/link-like.png')}/>
                    <Text style={styles.linkeShareItemText}>Like</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/link-coment.png')}/>
                    <Text style={styles.linkeShareItemText}>Comentário</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/link-share.png')}/>
                    <Text style={styles.linkeShareItemText}>Share</Text>
                </View>
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.viewButtonText}> Learn More</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
 