import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from  '../screens/NewPasswordScreen';
import Setting from '../screens/Setting/Setting';

import AlloGroup from '../screens/AlloGroup/AlloGroup';
import Food from '../screens/Office/AlloFood/Food';
import Office from '../screens/Office/Office';
import InscriptionFastGerant from '../screens/Office/AlloFood/Gerant/InscriptionFastGerant';
import InscriptionCardFood from '../screens/Office/AlloFood/Gerant/InscriptionProduit';
import NavigationTab from './navigation';
import DebutLivraison from '../screens/Office/AlloLivreur/DebutLivraison';
import DetailLivraison from '../screens/Office/AlloLivreur/Details';
import Commande from '../screens/Office/AlloFood/Commande';
import SelectionLieuDepart from '../screens/Office/AlloLivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../screens/Office/AlloLivreur/SelectionLieuRetrait';
import InscriptionLivreur from '../screens/Office/AlloLivreur/Backlivreur/InscriptionLivreur';
import FinLivraison from '../screens/Office/AlloLivreur/FinLivraison';
import PresentationCoursier from '../screens/Office/AlloLivreur/PresentationCoursier';
import navigationTabFood from '../screens/Office/AlloFood/NavigationTabFood';
import CartScreen from '../screens/Office/AlloFood/CartScreen';
import AttenteClient from '../screens/Office/AlloLivreur/AttenteClient/AttenteClient';
import { Auth, Hub } from '@aws-amplify/core';


import Apropos from '../screens/Aide/Apropos';
import AutreAddresseDelivraison from '../screens/Aide/Autreadedressedelivraison';
import InscriptionFAQ from '../screens/Aide/Inscription';
import Paiements from '../screens/Aide/Paiements';
import Parrain from '../screens/Aide/Parrain';
import Platsendommages from '../screens/Aide/Platsendommages';
import Pourquoi from '../screens/Aide/Pourquoi';
import Receptiondecolis from '../screens/Aide/Receptiondecolis';
import Receptionplatdifferent from '../screens/Aide/Receptionplatdifferent';
import Reserver from '../screens/Aide/Reserver';
import Resolutionretard from '../screens/Aide/Resolutionretard';
import Retardconsiderable from '../screens/Aide/Retardconsiderable';
import Typesdepaiement from '../screens/Aide/Typesdepaiement';

import FedaPayCheckout from '../components/Paiement/PaiementFedapay';
import FedaPayLivraison from '../components/Paiement/PayementLivraison';

const Stack = createNativeStackNavigator();

const Navigation = () => {

	const [user, setUser] = useState(undefined);


	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}	
	};
	useEffect(() => {
		checkUser();
	}, []);

	useEffect(() => {
		const listener = data => {
			if (data.payload.event === 'signIn' || data.payload.event == 'signOut')
			{
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator/>
			</View>
		)
	}
	return (
		<NavigationContainer>
			{/* <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Bienvenue'> */}
			<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='NavigationTab'>
			
				
				{ user ? (
					
					<Stack.Screen name='Bienvenue' component={Home}/>
					
				) : (
				<>
					<Stack.Screen name='Services' component={Office}/>
					<Stack.Screen name='Bienvenue' component={Home}/>
					<Stack.Screen name='Detail' component={DetailLivraison}/>
					<Stack.Screen name='InscriptionLivreur' component={InscriptionLivreur}/>
					<Stack.Screen name='Setting' component={Setting}/>
					<Stack.Screen name='Commande' component={Commande}/>
					<Stack.Screen name='PayementLivraison' component={FedaPayLivraison}/>

					<Stack.Screen name='CartScreen' component={CartScreen}/>
					<Stack.Screen name='Connexion' component={SignInScreen}/>	
					<Stack.Screen name='NavigationTab' component={NavigationTab}/>
					<Stack.Screen name='navigationTabFood'  screenOptions={{headerShown:false}} component={navigationTabFood}/>
					{/* <Stack.Screen name='InscriptionGerantFood' component={inscriptionGerantFood}/> */}
					<Stack.Screen name='DebutLivraison' component={DebutLivraison}/>
					<Stack.Screen name='InscriptionCardFood' component={InscriptionCardFood}/>
						
					<Stack.Screen name='AlloGroup' component={AlloGroup}/>
					<Stack.Screen name='Food' component={Food}/>
					
					<Stack.Screen name='livraison' component={DebutLivraison}/>		
					<Stack.Screen name='Inscription' component={SignUpScreen}/>
					<Stack.Screen name='Confirmation' component={ConfirmEmailScreen}/>
					<Stack.Screen name='Mot de passe oublie' component={ForgotPasswordScreen}/>
					<Stack.Screen name='Nouveau mot de passe' component={NewPasswordScreen}/>
					<Stack.Screen name='SelectionLieuDepart' component={SelectionLieuDepart}/>
					<Stack.Screen name='SelectionLieuRetrait' component={SelectionLieuRetrait}/>
					<Stack.Screen name='Fin de Livraison' component={FinLivraison}/>
					<Stack.Screen name='PresentationCoursier' component={PresentationCoursier}/>
					<Stack.Screen name='AttenteClient' component={AttenteClient}/>
					<Stack.Screen name='InscriptionFastGerant' component={InscriptionFastGerant}/>

					<Stack.Screen name='AutreAddresseDelivraison' component={AutreAddresseDelivraison}/> 
					<Stack.Screen name='Apropos' component={Apropos}/> 
					<Stack.Screen name='Paiements' component={Paiements}/> 
					<Stack.Screen name='InscriptionFAQ' component={InscriptionFAQ}/> 
					<Stack.Screen name='Platsendommages' component={Platsendommages}/> 
					<Stack.Screen name='Pourquoi' component={Pourquoi}/>
					<Stack.Screen name='Receptiondecolis' component={Receptiondecolis}/> 
					<Stack.Screen name='Receptionplatdifferent' component={Receptionplatdifferent}/> 
					<Stack.Screen name='Reserver' component={Reserver}/> 
					<Stack.Screen name='Typesdepaiement' component={Typesdepaiement}/> 
					<Stack.Screen name='Retardconsiderable' component={Retardconsiderable}/> 
					<Stack.Screen name='Parrain' component={Parrain}/> 
					<Stack.Screen name='Resolutionretard' component={Resolutionretard}/>

					<Stack.Screen name='FedaPayCheckout' component={FedaPayCheckout}/>
				</>
				)}
				
				

			</Stack.Navigator>		


		</NavigationContainer>

	
);
}

export default Navigation;