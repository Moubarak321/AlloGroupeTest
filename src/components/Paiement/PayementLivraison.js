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

	const html = `
	<!doctype html>
  <html lang="en">
  <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<title>Intégrer Feda Checkout à mon site</title>
	<script src="https://cdn.fedapay.com/checkout.js?v=1.1.7"></script>
  </head>
  <body>
	<button id="pay-btn">Payer 100 FCFA</button>
	<script type="text/javascript">
		FedaPay.init('#pay-btn', { public_key: 'pk_live_vOOSFt0ctR5_wp5z25_UD3iD' });
	</script>
  </body>
  </html>
	`;


return (
    <WebView
    
      originWhitelist={['*']}
      source={{ html: html }}
      javaScriptEnabled={true}
      javaScriptEnabledAndroid={true}

    />
    
  );  
  
};

export default FedaPayLivraison;
