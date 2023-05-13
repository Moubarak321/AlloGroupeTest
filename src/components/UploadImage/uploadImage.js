import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const uploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    };
  
    return (
      <View>
        <Button title="Choisir une image" onPress={pickImage} />
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
  });
  
  export default uploadImage;