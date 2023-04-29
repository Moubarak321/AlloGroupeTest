import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Pourquoi() {
  return (
    <View style={styles.container}>
      <View style={{marginTop:15}}>
        <Text style={{color:'orange'}}>Pourquoi choisir Allô Group ? </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text>Allô Group vous propose ses services à des coûts défiants toutes concurrences. </Text>
      </View> 

      <View style={{marginTop:15}}>
        <Text style={{color:'orange'}}>Avec Allô Group :</Text>
      </View> 

      <View style={{marginTop:15}}> 
        <Text >-	Restez chez vous et trouvez un zem et taxi en toute assurance. </Text>
      </View> 

      <View style={{marginTop:15}}>  
        <Text >-	Inutile de négocier ni les frais de transport, ni les frais de course et perdre votre temps puisqu’il vous convient déjà.</Text>
      </View> 

      <View style={{marginTop:15}}>  
        <Text >-	Vous êtes en toute sécurité et assuré lors de votre transport et vous suivez le parcours de vos courses en temps réel.</Text>       
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