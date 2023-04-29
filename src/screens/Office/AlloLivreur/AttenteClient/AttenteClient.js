import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import Scooteur from '../../../../../assets/images/scooteur.gif';
import CustomButton from '../../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

 

const AttenteClient = () => {
    const { height } = useWindowDimensions();
    
    const [paye, setpaye]=useState('');

    const navigation = useNavigation();
    const onPressRetour = () => {
        navigation.navigate('Services');
    };
    
    const onPressPayement = ()  => {
        navigation.navigate('PayementLivraison');
    };


    return (
        <View style={styles.root}>
            <Image
                source={Scooteur}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain'
            />

            <Text style={styles.title}>
                Notre livreur le plus proche vous contactera dans quelques instants...
            </Text>
            <Text>
                Une notification vous sera envoyée dans les plus brefs délais.
            </Text>
            <Text>
                Le sens de l'engagement, Avec vous chaque jour 
            </Text>


            <CustomButton
                text='Retour'
                onPress={onPressRetour}
                bgColor='#ff6d00'
                fgColor='white'
            />
            <TouchableOpacity onPress={onPressPayement} style={{marginTop:5}}>
            <Text>
                Je paye mon service par voie électronique 
            </Text>
            </TouchableOpacity> 
            
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: '100%',
        

    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    },


});
export default AttenteClient; 
