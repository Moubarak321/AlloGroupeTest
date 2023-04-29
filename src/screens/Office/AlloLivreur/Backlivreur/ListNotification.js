import React from 'react';
import {FlatList} from 'react-native';
import {basenotifaction} from './Basenotification';
import CardNotification from './CardNotification';
import { useWindowDimensions } from 'react-native';

const ProductsList = () => {
    const {width, height} = useWindowDimensions();
  return (
   
        <FlatList
            data={basenotifaction}
            keyExtractor ={(basenotifaction) => basenotifaction.id}
            renderItem={({item}) => <CardNotification  {...item} />}
            style={{ maxwidth: width, height:height*0.1, minwidth: width*0.9 }}
        />
        )}

export default ProductsList;