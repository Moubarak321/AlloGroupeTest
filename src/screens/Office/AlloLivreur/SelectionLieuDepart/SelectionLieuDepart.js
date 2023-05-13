import React, { useState, useEffect } from 'react';
import {View, Text, Dimensions,StyleSheet, TextInput, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {
	GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environements";
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

const SelectionLieuDepart = () => {
	const navigation = useNavigation();
	const [IdentifiantArrivee, setIdentifiantArrivee] = useState('');
	const [NumeroArrivee, setNumeroArrivee] = useState('');
	const {control, handleSubmit, formState:{errors}, watch} = useForm();

	const onPressLieuDepart = async (value) => {
		try {
		  await AsyncStorage.multiSet([
			// ['lieu_arrivee', details.description],
			['personne_depart', IdentifiantArrivee],
			['numero_depart', NumeroArrivee]
		  ]);
		  console.log('done')
		  navigation.navigate("SelectionLieuRetrait");
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
		<View style={styles.place}>
			<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
				Où cherchez le livrable ?
			</Text>
			<GooglePlacesAutocomplete
				style={{ textInput: styles.input }}
				placeholder='Lieu de récupération'
				onPress={async (details = null) => {
					console.log(details.description);
					try {
						await AsyncStorage.setItem('lieu_depart', details.description);
						console.log('done')

					} catch (error) {
						console.error("Erreur lors de la sauvegarde des données :", error);
					}
				}} 
				query={{
					key: GOOGLE_API_KEY,
					language: 'fr',
					components: 'country:bj',
				}}

			/>
			<View style={styles.details}>

				<Text style={{ fontSize: 20, color: 'orange' }}>
					Personne a contacté au
					lieu de récupération
				</Text>

				<CustomInput
					name='IdentifiantArrivee'
					control={control} 
					placeholder={'Votre email'}
					rules={{
						required:'Aidez le livreur en donnant de votre contact',  	
					}}
				/> 

				<CustomInput
					name='NumeroArrivee'
					control={control} 
					placeholder={'Numéro de téléphone'}
					keyboardType={'numeric'} 
					rules={{
						required:'Aidez le livreur en donnant le numéro à contacter',  	
						minLenght: {
							value:8,
							message:'Nous vous prions de revoir le numéro',
							},
					}}
				/> 

				<CustomButton
					text='Confirmation du lieu de récupération'
					onPress={handleSubmit(onPressLieuDepart)}
					bgColor='orange'
					fgColor='white'
				/>
			</View>
		</View>


	</View>
)};

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	place: {
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
	},
	input: {
		borderColor: "orange",
		borderWidth: 2,
	},
	details: {
		marginTop: 1,

	}
});
export default SelectionLieuDepart;