import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function AutreAddresseDelivraison() {
  return (
    <View style={styles.container}>
      <View >
          <Text style={{color:'orange'}}>
          Je veux faire commander et faire livrer à une adresse différente 
          que la mienne, que dois-je faire ?
          </Text>
      </View>

      <View style={{marginTop:15}}>
        <Text>
        Avec Allô Food il est possible de commander 
        et faire livrer à une autre adresse que la sienne.
        </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text>
          Après la commande, il faut juste choisir 
          l’adresse de livraison souhaitée dans 
          l’interface qui s’affiche.
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