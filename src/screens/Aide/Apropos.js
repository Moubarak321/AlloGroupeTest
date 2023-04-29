import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Apropos() {
    return (
        <View style={styles.container}>
           <View style={{marginTop:15}}>
                <Text>Allô Group est la solution à vos besoins. 
                    Elle est une application de référence en Afrique où 
                    chaque utilisateur a une valeur ajouté. Elle vous permet :
                </Text>
            </View>

            <View style={{marginTop:15}}>
                <Text>- de vous déplacez en commandant des zémidjans et des taxis où que vous soyez et ce depuis votre téléphone.
                </Text>
            </View>

            <View style={{marginTop:15}}>
                <Text>- de faire vos courses auprès des boutiques en ligne qui vous proposent un large 
                    catalogue de produits tels que la restauration, l’épicerie, l’électroménager, etc….
                </Text>
            </View>

            <View style={{marginTop:15}}>
                <Text>- de faire des propositions vos produits à votre cible clientèle.
                </Text> 
            </View>               
        </View >
  )
}

const styles = StyleSheet.create({
    container: {
        alignContent:'center',
        justifyContent:'center',
        margin:30,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
})