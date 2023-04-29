import React from 'react';
import {View, Text} from 'react-native';
import ListNotification from './ListNotification';

export const notification_livraison = () => {
  return (
    <View style={styles.container}>
           
            <Text style={styles.titleText}> Commandes de livraison disponibles</Text>
            <ListNotification/>
         
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
