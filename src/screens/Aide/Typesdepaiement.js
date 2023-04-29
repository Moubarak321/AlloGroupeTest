  import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function Typesdepaiement() {
  return (
    <View style={styles.container}>
      <View style={{marginTop:15}}>
        <Text style={{ fontWeight:'bold', color:'orange'}}>
        Allô Food
        </Text>
      </View> 

      <View style={{marginTop:15}}> 
        <Text >
        Quels types de paiements 
        acceptez-vous ?
        </Text>
      </View> 

      <View style={{marginTop:15}}>
        <Text style={{fontWeight:'bold'}}>
        Avec le service Allô Food de Allô Group, 
                        vous pouvez choisir votre paiement parmi :
        </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text >
        -	Espèces
        </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text >
        -	Portefeuille Allô Group
        </Text>
      </View>

      <View style={{marginTop:15}}>
        <Text style={{marginLeft:5}}>
        -	Carte Bancaire
        </Text>
      </View> 

      <View style={{marginTop:15}}>
        <Text >
        NB : Toutes les informations personnelles de 
                        ne clients sont confidentielles et bien sécurisées.
        </Text>
      </View>  

      <View style={{marginTop:15}}> 
        <Text >
        Allô Group est en partenariat avec des professionnels 
                        de renommée internationale dans le domaine 
                        pour assurer cette confidentialité et cette sécurité.
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