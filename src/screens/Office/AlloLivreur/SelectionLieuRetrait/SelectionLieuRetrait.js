import { useState } from 'react';
import {View,Text, Dimensions, 
	StyleSheet,TextInput, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {
	//GooglePlaceDetail,
	GooglePlacesAutocomplete
  } from "react-native-google-places-autocomplete";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_API_KEY } from "../environements";
import CustomButton from '../../../../components/CustomButton/CustomButton';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 6.366667,
  longitude: 2.433333,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const SelectionLieuRetrait = () => {
	const navigation = useNavigation();
	const {control, handleSubmit, formState:{errors}, watch} = useForm();
	const [IdentifiantDepart, setIdentifiantDepart] = useState('');
	const [NumeroDepart, setNumeroDepart] = useState('');
	const onConfirmationDepart = async (value) => {
		try {
		  await AsyncStorage.multiSet([
			['personne_arrivee', IdentifiantDepart],
			['numero_arrivee', NumeroDepart]
		  ]);
		  navigation.navigate("Detail");
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
		<View style= {styles.place}>
			<Text style={{ fontSize:25, fontWeight:'bold'}}>
			Où livrez-vous ?
			</Text>	
			<GooglePlacesAutocomplete
				style = {{ textInput: styles.input }} 
      			placeholder = 'Lieu de livraison' 
      			onPress={async (details = null) => {
					console.log(details.description);
					try {
						await AsyncStorage.setItem('lieu_arrivee', details.description);
						console.log('done')

					} catch (error) {
						console.error("Erreur lors de la sauvegarde des données :", error);
					}
				}} 
      			query = { { 
        			key : GOOGLE_API_KEY , 
        			language :'fr', 
					components: 'country:bj',
      			}} 
    		/> 
			<View style={styles.details}>
				<Text style={{fontSize:20, color:'orange'}}>
					Personne a contacté au 
					lieu de livraison
				</Text>
				
				<CustomInput 
					name='IdentifiantDepart'
					control={control}
					placeholder={'Identifiant'}
					rules = {{
						required:'Aidez le livreur en donnant le prénom de la personne à contacter',
					}}
				/>
				<CustomInput 
					name='NumeroDepart'
					control={control}
					placeholder={'Numéro de téléphone'}
					keyboardType={'numeric'}
					rules = {{
						required:'Aidez le livreur en donnant le numéro à contacter',
						minLenght: {
							value:11,
							message:'Votre numéro doit être de huit caractère au moins',
							},
					}}
				/>
				<CustomButton
					text='Confirmation de lieu de livraison'
					onPress={onConfirmationDepart}
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
	place:{
		position:'absolute',
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
		margin:20,
	},
	input:{
		borderColor: "orange",
    	borderWidth: 2,
	}, 
	details:{
		marginTop:1,
	} 
});
export default SelectionLieuRetrait;