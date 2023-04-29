import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Reserver() {
    return (
<View style={styles.container}>
    
    <View style={{marginTop:15}}>
        <Text style={{color:'orange'}}  >
            Réserver la course Allô Group
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        Pour réserver la course Allô Group, 
                    c’est très simple ! 
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text>
        Une fois rentrer dans 
                    l’application Allô Group, choisissez le service de 
                    Allô Livreur puis suivre les étapes ci-dessous :,
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        -	Créer un ticket de course        
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        -	Saisir l'adresse de récupération du colis
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        -	Saisir l'adresse de destination du colis
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        -   Choisir une date ultérieur pour la course
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        -	Appuyer sur « confirmer la destination »
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text >
        En l’espace de quelques minutes, votre coursier vous contactera pour 
                confirmation à son niveau.
        </Text>
    </View>

    <View style={{marginTop:15}}>    
        <Text>
        Cordialement.
        </Text>
    </View>

    <View style={{marginTop:15}}>
        <Text>
        L’équipe Allô Group
        </Text>
    </View>    
</View>
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