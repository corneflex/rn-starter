import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from "react-native";

const randColor = () => Math.floor(Math.random() * 256);
const randRGBA = () => `rgba(${randColor()},${randColor()},${randColor()},${Math.random().toFixed(2)})`;

const RandomColorScreen = ()=>{
    const [colors, setColors] = useState([]);
    const addColor = ()=>{
        console.log(randRGBA());
        setColors([...colors, randRGBA()])
    };

    return (<View>
        <Button title={'Add Color'} onPress={()=>addColor()}/>
        <FlatList data={colors} keyExtractor={({item})=>item} renderItem={({item})=>(
            <View style={styles.row}>
                <View style={{backgroundColor:item, width:50, height:50,...styles.cell}}/>
                <Text style={styles.cell}>{item.toString()}</Text>
            </View>
        )}/>
    </View>);
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    cell:{
        margin:5
    }
});

export default RandomColorScreen;
