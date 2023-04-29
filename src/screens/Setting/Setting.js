import * as React from 'react';
import {View, Text, Dimensions, 
	StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
	
	const navigation = useNavigation();
	const onPressFunctionRecharger = () => {
		navigation.navigate('FedaPayCheckout')	
		console.log('checkout portefeuille')
	};

	const [user, setUser] = React.useState(null); // état pour stocker les informations de l'utilisateur

	React.useEffect(() => {
		const getCurrentUser = async () => {
			try {
				const userInfo = await Auth.currentAuthenticatedUser();
				setUser(userInfo);
			} catch (error) {
				console.log('Erreur:', error);
			}
		};

		getCurrentUser();
	}, []); 
	const onPressLivreur = () => {
		navigation.navigate('inscriptionLivreur');
	};
	const onPressFastFood = () => {
		navigation.navigate('InscriptionFastGerant');
	};
	const onPressDeconection = () => {
		alert('OK')
	};

	return (
	<View style={styles.root}>	
	<View style={styles.profile}>	
		<Image 
			source={require('./profil_default.png')}
			style={styles.profil}
			resizeMode="contain"
		/>
	</View>	
	<View>
		<Text style={{fontSize:15,  paddingBottom:20}}> Identifiant : {user?.username}</Text>
		<Text style={{fontSize:15, paddingBottom:20}}> Email : {user?.attributes?.email}</Text>
		<TouchableOpacity style={{paddingBottom:20}} onPress={onPressDeconection}>
			<Text style={{fontSize:15}}> Se déconnecter</Text>
		</TouchableOpacity>
	</View>
	
	<Pressable style={{paddingBottom:20}}
		onPress={onPressFunctionRecharger}>
  		<Text style={{fontWeight:'bold', color:'blue'}}>Rechargez votre portefeuille</Text>
	</Pressable>
	
	<View style={{alignItems:'center'}}>
		<Text style={{fontSize:15, fontWeight:'bold', 
		paddingBottom:20, color:'orange'}}>
			😊 BON PLAN DJIGO 👇🏽
		</Text>

		<TouchableOpacity onPress={onPressLivreur}>
			<Text style={{fontSize:15, 
			paddingBottom:20}}>
				Quoi livrez aujourd'hui ?
			</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={onPressFastFood}>
			<Text style={{fontSize:15, 
			paddingBottom:20}}>
			Postez un Fast Food 
			</Text>
		</TouchableOpacity>

	</View>
	</View>	
)};		

const styles= StyleSheet.create(
{
	profile:{
		alignItems:'center',
		backgroundColor:'white',
		borderRadius:10,
	},
	root:{
		marginRight:10,
		marginLeft:10,
		
	},

})



export default Setting;
