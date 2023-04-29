import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    body: 'lorem ipsum dolor sit'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    body: 'lorem ipsum dolor sit'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    body: 'lorem ipsum dolor sit'

  },
];



const Notification_list = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) =>(
            <TouchableOpacity onPress={() =>navigation.navigate('notification_livraison', item)}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
        )} 
        keyExtractor={item => item.id}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Notification_list ;






































// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const notification_livraison = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, text: 'Notification 1' },
//     { id: 2, text: 'Notification 2' },
//     { id: 3, text: 'Notification 3' },
//   ]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Notifications</Text>
//       {notifications.map((notification) => (
//         <View key={notification.id} style={styles.notification}>
//           <Text style={styles.notificationText}>{notification.text}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   notification: {
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   notificationText: {
//     fontSize: 18,
//   },
// });

// export default notification_livraison;
