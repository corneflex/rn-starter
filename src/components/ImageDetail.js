import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems:'center'
    },
    column:{
        flexDirection: 'column',
    },
    icon:{
        margin:5,
        width:50,
        height:50
    }
});

const ImageDetail = ({source, title, subtitle})=>{
    return <View style={styles.row}>
        <Image style={styles.icon} source={source}/>
        <View style={styles.column}>
            <Text>{title}</Text>
            <Text>Image Score - {subtitle}</Text>
        </View>
    </View>
}

export default ImageDetail;
