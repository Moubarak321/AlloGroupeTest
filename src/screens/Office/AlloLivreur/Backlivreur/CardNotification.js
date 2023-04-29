import React, { useState } from 'react';
import {Text, View, Image,
    StyleSheet, SafeAreaView } from 'react-native';
import CustomButton from '../../../../components/CustomButton/CustomButton';

const CardNotification = ({ image, category, title, description, date}) => {


    const onPressFunctionReponseLivreur = () => {
        warn.console('Ajout au panier');
    }
  return (
    <SafeAreaView style={[styles.container, styles.shadowProp]}>
        <View style = {{marginBottom: 25
            }}>
            
            <Image
                source={{ uri : image}}
                  style={{
                    height: 300,
                    width:'100%',
                          }}
            />
            
            <View>
                <Text style= {{color:'orange', fontSize:25}}>{category}</Text>
            </View>  

            <View>             
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Course : </Text>
                <Text>{title}</Text>
            </View>

            <View
                style={{
                flexDirection: 'row',
                height: 50,
                padding: 5,
            }}>
                
                <Text> Posté a {date} </Text> 

                
            </View>

            <View style={{marginBottom:15}}>
                <Text style={{ 
                    fontSize:15,
                    fontWeight:'bold',
                    }}>
                Description</Text>
                <Text numberOfLines={5}>{description}</Text>
            </View>

            <CustomButton
                onPress={onPressFunctionReponseLivreur}
                text="Ajoutez au panier !"
                fgcolor='white'
                bgColor="#ff6d00"
            />
        </View>    
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    container: {
        //  flex:1,
        //  backgroundColor: '#fff',
        //  alignItems: 'center',
        //  justifyContent: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 10,  
        
       },
       shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});
export default CardNotification;