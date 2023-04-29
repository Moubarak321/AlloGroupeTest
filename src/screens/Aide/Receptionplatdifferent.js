import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function Receptionplatdifferent() {
  return (
    <View style={styles.container}>
      <View style={{marginTop:15}}> 
        <Text >
        J’ai reçu une commande de plat différente 
                            de celle que j’ai commandée, que dois-je faire ?
        </Text>
      </View> 
      
      <View style={{marginTop:15}}>   
        <Text >
        Il faut écrire au service client via 
                            le numéro +22953899427 en précisant le numéro de commande 
                            puis en envoyant des photos de la commande erronée.
        </Text>
      </View>

      <View style={{marginTop:15}}>  
        <Text >
        Le service client 
        se changera de rentrer en contact avec le restaurant afin de déterminer 
        les responsabilités et reviendra vers vous avec un apport de solution.
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