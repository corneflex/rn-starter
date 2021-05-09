import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const arr = [{
    source: {uri: 'https://picsum.photos/id/340/50/50'},
    title: 'Mountain', score:'9'
}, {source: {uri: 'https://picsum.photos/id/341/50/50'}, title: 'Sea', score:'3'}, {
    source: {uri: 'https://picsum.photos/id/342/50/50'},
    title: 'Country', score:'7'
}];
const styles = StyleSheet.create({});

const ImageScreen = () => {
    return <View>{arr.map(item => (<ImageDetail source={item.source} title={item.title} subtitle={item.score}/>))}</View>;
}

export default ImageScreen;
