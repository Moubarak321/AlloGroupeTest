import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default function Parrain() {
  return (
    <View style={styles.container}>
        <View style={{marginTop:15}}>
                <Text style = {{color:'orange'}}>
                        L’application Allô Group
                </Text>
        </View>

        <View style={{marginTop:15}}>
                <Text style = {{color:'orange'}}>
                        Parrainer un nouvel utilisateur
                </Text>
        </View>
        <View style={{marginTop:15}}>
                <Text>
                        Pour parrainer un nouvel utilisateur, prière 
                        entrer dans l’application et suivre les différentes 
                        étapes ci-dessous :
                </Text>
        </View>
        <View style={{marginTop:15}}>
                <Text style = {{marginLeft:5}}>
                1- Entrez dans le Menu de l’application 
                situé au niveau des paramètres.
                </Text>
        </View>
        <View style={{marginTop:15}}>
                <Text >
                2- Appuyez sur le boutton de parrainage 
                pour générer un code 
                </Text>  
        </View>
        <View style={{marginTop:15}}>    
                <Text >
                3- Partagez votre code de parrainage à votre 
                ami qui vient juste de créer son compte Allô Group
                </Text> 
        </View>
        <View style={{marginTop:15}}>  
                <Text >
                4- Votre ami saisit le code chez lui
                </Text>  
        </View>
        <View style={{marginTop:15}}>
                <Text style = {{ color:'orange'}}>
                        Attention : 
                </Text>  
        </View>
        <View style={{marginTop:15}}>
                <Text >
                        La limite du parrainage est fixée à 15 
                        personnes, passé ce nombre, votre code 
                        devient obsolète
                </Text>  
        </View>
        <View style={{marginTop:15}}>
                <Text >
                        Bénéficier un code promo généré en 
                        parrainant un(e) ami(e) qui effectue une 
                        course avec l’application Allô Group dans 
                        un délai de 30 jours.
                </Text>  
        </View>
</View >
)}

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