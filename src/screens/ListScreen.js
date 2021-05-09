import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";

const friends = ['Daniel', 'Hugo', 'Adrien'];

const renderItem = ({item})=>{
    console.warn(item);
    return (
        <View style={styles.item} style={{height:300}}>
            <Text style={styles.title}>{item}</Text>
        </View>
    )
}

const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const keyExtractor = item=>item.toString()

const ListScreen = (props)=>{
 return <FlatList data={ids}  windowSize={3} initialListSize={8}
    initialNumToRender={8}
    maxToRenderPerBatch={9} renderItem={renderItem} keyExtractor={keyExtractor}/>;
}

const styles = StyleSheet.create({});

export default ListScreen;
