import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    // Récupérer les données du panier depuis Asynstorage
    AsyncStorage.getItem('cartData')
      .then(data => {
        if (data !== null) {
          // Transformer la chaîne de caractères JSON en objet JavaScript
          const items = JSON.parse(data);
          setCartItems(items);
          // Calculer le coût total du panier
          const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
          setCartTotal(total);

          // Enregistrer le coût total dans AsyncStorage
          AsyncStorage.setItem('cartTotal', JSON.stringify(total))
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onPressPasserCommande = () => {
    navigation.navigate('Commande');
  };

  const onPressReprendre = async () => {
    try {
      // Supprimer les données du panier depuis AsyncStorage
      await AsyncStorage.removeItem('cartData');
      await AsyncStorage.removeItem('cartTotal');
      // Mettre à jour l'état du panier
      setCartItems([]);
      setCartTotal(0);
      navigation.navigate('Food');
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <View style={{paddingRight:50}}> 
        <TouchableOpacity onPress={onPressReprendre} >
          <Text style={{fontSize: 10}}>Reprendre mon achat</Text>
        </TouchableOpacity>
      </View> 

      <View style={{paddingRight:50}}> 
          <Text style={styles.title}>Votre Panier coûte {cartTotal} F</Text>
      </View> 

      <View>        
        <TouchableOpacity onPress={onPressPasserCommande} >
          <Image 
            style={{width:25, height:25}}
            source={require('../../../../assets/images/commande.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>    
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {cartItems.map(item => (
        <View key={item.title} style={styles.item}>
          <Text style={{color:'orange', textAlign:'center', fontWeight: 'bold'}}>Bilan du produit</Text>
          <Text>Catégorie :{item.category}</Text>
          <Text>Nombres : {item.count}</Text>
          <Text>Prix unitaire : {item.price} F</Text>
          <Text>Dû : {item.price * item.count} F</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 20,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign :'center',
    color : 'orange',
    
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
  },
});

export default CartScreen;
