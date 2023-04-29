import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet, TextInput,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const details = () => {
  const navigation = useNavigation();
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');
  const onPressTerminerLivraison = async (value) => {
		try {
		  await AsyncStorage.multiSet([
        ['titre', titre],
            ['message', message]
		  ]);
		  console.log('done')
		  navigation.navigate("AttenteClient");
		} catch (e) {
		  console.error("Erreur lors de la sauvegarde des données :", e);
		//   navigation.navigate("SelectionLieuRetrait");
		}
	  };
  
  return (
    <View style={styles.root}>
      <View style={styles.Titrelivraison}>
        <View style= {{alignItems:'center'}}> 
        <Text style={{color:'orange'}}>Titre de la livraison</Text>
        </View>
        <TextInput
          style={{ marginBottom: 10, paddingTop: 50 }}
          value={titre}
          onChangeText={setTitre}
          placeholder="Titre de la livraison"
          required={true}
          errorMessage="Donne un titre pour rendre le tracage facile"
        />
      </View>

      <View style={styles.Titrelivraison}>
      <View style= {{alignItems:'center'}}> 
      <Text style={{color:'orange'}}>Détails de la livraison</Text>
      </View>

      <TextInput
        style={{ marginBottom: 10, height: 50 }}
        value={message}
        onChangeText={setMessage}
        multiline
        placeholder="Détails sur livraison"
        required={true}
        errorMessage="Nous vous invitons à donner ces détails 
            pour la sécurité la marchandisse"
      />
      </View>

      <Button
        title='Terminez le processus'
        onPress={onPressTerminerLivraison} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 10,
  },
  Titrelivraison:{
    marginTop:50,
    
  }
});
export default details;