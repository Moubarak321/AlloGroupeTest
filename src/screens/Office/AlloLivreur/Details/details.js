import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet, TextInput,
  Button,Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomButton from '../../../../components/CustomButton';
import CustomInput from '../../../../components/CustomInput';
import {useForm} from 'react-hook-form';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
	latitude: 6.3561,
	longitude: 2.3833,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
};





const Details = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, formState:{errors}, watch} = useForm();
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
    }
  };

  return (
      <View>
        <MapView
			    style={styles.map}
			    provider={PROVIDER_GOOGLE}
			    initialRegion={INITIAL_POSITION}
		    />

      <View style={styles.root}>
    
        <Text style={{ color: 'orange' }}>Titre de la livraison</Text>
          <View>
            
            <CustomInput
					    name='titre'
					    control={control} 
					    placeholder={'ex: Livraison de John'}
					    rules={{
						    required:'Donnez un titre pour rendre le tracage facile',  	
					    }} 
				    />
          </View>

          <View style={{ marginTop: 50, marginBottom: 20 }}>
              <Text style={{ color: 'orange' }}>Détails de la livraison</Text>
                <CustomInput
					        name='message'
					        control={control} 
					        placeholder={'ex: Poulet, chaussures, Coliers...'}
					        rules={{
						        required:'Nous vous invitons à donner ces détails pour la sécurité la marchandisse',  	
					        }} 
				        />
            
          </View>

          <CustomButton
            text='Terminez le processus'
            fgColor='white'
            bgColor='orange'
            onPress={handleSubmit(onPressTerminerLivraison)} />
      </View>

      </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 50,
    margin: 20,
    // marginBottom: 50,
  },
  Titrelivraison: {
    marginTop: 20,

  },
  input: {
    // marginTop:20,
    borderRadius: 10,
    padding: 10,
    borderColor: "orange",
    backgroundColor: "white",
    borderWidth: 1,
    position: 'absolute',
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    // padding: 8,
    borderRadius: 8,
    top: 5,
    right: 10,
    margin: 20,
    // bottom:10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

});
export default Details;