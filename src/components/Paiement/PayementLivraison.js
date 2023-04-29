import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { Auth } from 'aws-amplify';

const FedaPayLivraison = ( ) => {
  
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




return (
    <WebView
    
      originWhitelist={['*']}
      source={{ uri: 'https://me.fedapay.com/allogroup' }}
      javaScriptEnabled={true}
      javaScriptEnabledAndroid={true}

    />
    
  );  
  
};

export default FedaPayLivraison;
