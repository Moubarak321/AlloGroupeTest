import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { Auth } from 'aws-amplify';

const FedaPayCheckout = ({ transactionAmount }) => {
  
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

  // const html = `
  //   <!doctype html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="utf-8">
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  //     <title>Integrate Feda Checkout to my website</title>
  //     <script src="https://cdn.fedapay.com/checkout.js?v=1.1.7"></script>
  //   </head>
  //   <body>
  //     <button id="pay-btn">Pay ${transactionAmount} FCFA</button>
  //     <script type="text/javascript">
  //         FedaPay.init('#pay-btn', {
  //           public_key: 'pk_live_-lyX7MAtlwiV4yxy_-kQL8iQ',
  //           transaction: {
  //             amount: ${transactionAmount},
  //             description: 'Paiement électronique'
  //           },
  //           customer: {
  //             email: {user?.attributes?.email},
  //             lastname: {user?.username},
  //             firstname: {user?.username}
  //           }
  //         });
  //     </script>
  //   </body>
  //   </html>
  // `;


return (
    <WebView
    
      originWhitelist={['*']}
      source={{ uri: 'https://me.fedapay.com/allogroup' }}
      // source={{ html: html }}
      javaScriptEnabled={true}
      javaScriptEnabledAndroid={true}
    />
    
  );  
  
};

export default FedaPayCheckout;
