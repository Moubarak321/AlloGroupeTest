import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function InscriptionFAQ() {
  return (
      <View style={styles.container}>
        <View style={{marginTop:15}}>
          <Text style = {{color:'orange'}}>
              Inscription
          </Text>
        </View>
        <View style={{marginTop:15}}>
          <Text >
            Comment et où je télécharge l’application 
                          pour m’inscrire ?
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text >
          L’application Allô Group est disponible sur 
                          Play store et sur App Store.
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text>
            Il faut vous y rendre en téléchargeant l’application Allô Group.                          
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text>
            Si vous avez des difficultés à télécharger, nous vous 
            suggérons de vérifier si vous êtes bien connecté au réseau internet.
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text>
            Vous devriez également vérifier si votre téléphone a assez 
            d’espace pour l’application ou toutefois, nous contacter sur 
            le numéro support : +22953899427
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