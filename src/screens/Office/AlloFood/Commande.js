import React, { useState, useEffect } from 'react';
import {View, Text, Dimensions,StyleSheet, TextInput, Button} from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { LivreurModel } from '../../../models';
import '@azure/core-asynciterator-polyfill';
import Amplify,{ Storage } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {
	GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../Office/AlloLivreur/environements";

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

const Commande = () => {
	const navigation = useNavigation();
	const [IdentifiantArrivee, setIdentifiantArrivee] = useState('');
	const [NumeroArrivee, setNumeroArrivee] = useState('');

	const onPressLieuCommande = async (value) => {

		navigation.navigate('AttenteClient');
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
				Où livrez votre commande ?
			</Text>
			<GooglePlacesAutocomplete
				style={{ textInput: styles.input }}
				placeholder='Livraison'
				onPress={async (details = null) => {
					console.log(details.description);
					try {
						await AsyncStorage.setItem('lieu_livraison_nourriture', details.description);
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
					lieu de livraison
				</Text>
				<TextInput
					style={{ height: 40 }}
					value={IdentifiantArrivee}
					placeholder="Prénom"
					onChangeText={setIdentifiantArrivee}
					required={true}
					errorMessage="Aidez le livreur en donnant le prénom  de la personne à contacter"
				/>
				<TextInput
					style={{ height: 40 }}
					value={NumeroArrivee}
					placeholder="Numéro de téléphone"
					onChangeText={setNumeroArrivee}
					keyboardType='numeric'
					maxLength={11}
					required={true}
					errorMessage="Aidez le livreur en donnant le numéro à contacter"
				/>
				<Button
					title='Passez la commande'
					onPress={onPressLieuCommande}
					color='orange'
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
export default Commande;