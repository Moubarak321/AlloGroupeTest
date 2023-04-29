
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Office from '../screens/Office/Office';
import Setting from '../screens/Setting/Setting';
import Historique from '../screens/Historique/Historique';
import Food from '../screens/Office/AlloFood/Food';
import Home from '../screens/Home';
import AlloGroup from '../screens/AlloGroup/AlloGroup';
import DetailLivraison from '../screens/Office/AlloLivreur/Details';
import DebutLivraison from '../screens/Office/AlloLivreur/DebutLivraison/DebutLivraison';
import InscriptionLivreur from '../screens/Office/AlloLivreur/Backlivreur/InscriptionLivreur';
import navigationTabFood from '../screens/Office/AlloFood/NavigationTabFood';
import SelectionLieuDepart from '../screens/Office/AlloLivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../screens/Office/AlloLivreur/SelectionLieuRetrait';
import { createStackNavigator } from '@react-navigation/stack';
import PresentationCoursier from '../screens/Office/AlloLivreur/PresentationCoursier';
import AttenteClient from '../screens/Office/AlloLivreur/AttenteClient/AttenteClient';
import InscriptionFastGerant from '../screens/Office/AlloFood/Gerant/InscriptionFastGerant';

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
import CartScreen from '../screens/Office/AlloFood/CartScreen';
import Commande from '../screens/Office/AlloFood/Commande';

import FedaPayCheckout from '../components/Paiement/PaiementFedapay';
import FedaPayLivraison from '../components/Paiement/PayementLivraison';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function StackScreen() {
	return (
		<Stack.Navigator >
			<Stack.Screen
				options={{
					headerShown: false
				}}
				name='Services'
				component={Office}

			/>
			<Stack.Screen name='Bienvenue' component={Home} options={{
				headerShown: false
			}} />

			<Stack.Screen name='Detail' component={DetailLivraison} options={{
				headerShown: false
			}} />
			<Stack.Screen name='DebutLivraison' component={DebutLivraison} options={{
				headerShown: false
			}} /> 

			<Stack.Screen name='Commande' component={Commande} options={{
				headerShown: false
			}} />
			<Stack.Screen name='Setting' component={Setting} options={{
				headerShown: false
			}} />
			<Stack.Screen name='CartScreen' component={CartScreen} options={{
				headerShown: false
			}} />
			
			<Stack.Screen name='navigationTabFood' component={navigationTabFood} options={{
				headerShown: false
			}} />
			<Stack.Screen name='AlloGroup' component={AlloGroup} options={{
				headerShown: false
			}} />
			
			<Stack.Screen name='SelectionLieuDepart' component={SelectionLieuDepart} options={{
				headerShown: false
			}} />
			<Stack.Screen options={{
				headerShown: false,
			}} name='Food' component={Food} />

			<Stack.Screen options={{ headerShown: false, }} name='SelectionLieuRetrait' component={SelectionLieuRetrait} />
			<Stack.Screen options={{ headerShown: false, }} name='PresentationCoursier' component={PresentationCoursier} />
			<Stack.Screen options={{ headerShown: false, }} name='AttenteClient' component={AttenteClient} />
			<Stack.Screen options={{ headerShown: false, }} name='InscriptionLivreur' component={InscriptionLivreur} />
			<Stack.Screen options={{ headerShown: false, }} name='InscriptionFastGerant' component={InscriptionFastGerant} />



			<Stack.Screen options={{
				headerShown: false,
			}} name='Apropos' component={Apropos} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='AutreAddresseDelivraison' component={AutreAddresseDelivraison} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='InscriptionFAQ' component={InscriptionFAQ} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Paiements' component={Paiements} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Parrain' component={Parrain} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Platsendommages' component={Platsendommages} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Pourquoi' component={Pourquoi} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Receptiondecolis' component={Receptiondecolis} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='ReceptionPlatdifferent' component={Receptionplatdifferent} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Reserver' component={Reserver} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Resolutionretard' component={Resolutionretard} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Retardconsiderable' component={Retardconsiderable} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='Typesdepaiement' component={Typesdepaiement} />

			<Stack.Screen options={{
				headerShown: false,
			}} name='FedaPayCheckout' component={FedaPayCheckout} />

<Stack.Screen options={{
				headerShown: false,
			}} name='PayementLivraison' component={FedaPayLivraison} />




		</Stack.Navigator>
	)

}






const NavigationTab = () => {

	return (
		<NavigationContainer independent={true} style={{}}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Services') {
							iconName = focused ? 'earth-outline' : 'earth-outline';
						}
						else if (route.name === 'Paramètres') {
							iconName = 'ios-options-outline';
						}
						else if (route.name === 'Mes Activités') {
							iconName = 'construct-outline';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: '#ff6d00',
					tabBarInactiveTintColor: '#07528a',
				})}>

				<Tab.Screen name='Services' component={StackScreen} />
				<Tab.Screen name='Paramètres' component={Setting} />
				<Tab.Screen name='Mes Activités' component={Historique} />


			</Tab.Navigator>
		</NavigationContainer>

	);


}

export default NavigationTab;