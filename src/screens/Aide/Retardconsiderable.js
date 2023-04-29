
import { Text, View, StyleSheet } from 'react-native';

export default function Retardconsiderable() {
  return (
    <View style={styles.container}> 

      <View style={{marginTop:15}}>
        <Text >
        Ma commande a été livré avec un retard 
        considérable, que faire ?
        </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text>
        Il faut écrire au service client via le numéro +22953899427 
        en précisant le numéro de commande.
        </Text>
      </View>  

      <View style={{marginTop:15}}>
        <Text >
        Le service client se changera de rentrer en contact 
        avec les parties prenantes (livreur et restaurant) 
                    afin de déterminer les responsabilités, et reviendra 
                    vers vous avec un apport de solution.
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