import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function Paiements() {
  return (
    <View style={styles.container}>
      <View >
        <Text style = {{color: 'orange'}}>
          Allô Livreur
        </Text>
      </View>

      <View style={{marginTop:15}}>
        <Text style = {{color:'orange'}}>
          Quels types de paiements acceptez-vous ?
        </Text>
      </View>

      <View style={{marginTop:15}}>
        <Text >
          Avec le service Allô Livreur de Allô Group,
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
        <Text >
          -	Carte Bancaire
        </Text>
      </View>

      <View style={{marginTop:15}}>
        <Text style = {{color :'orange'}}>
          NB : Toutes les informations personnelles
          de nos clients sont confidentielles et bien sécurisées.
        </Text>
      </View>
      
      <View style={{marginTop:15}}>
        <Text>
          Allô Group est en partenariat avec des
          professionnels de renommée internationale dans le
          domaine pour assurer cette confidentialité et cette sécurité.
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