import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = (props)=>{
    return <View>
        <Text style={styles.text45}>Getting started with React Native!</Text>
        <Text style={styles.text20}>My name is {props.name}</Text>

    </View>;
};

const styles = StyleSheet.create({
    text45: {
        fontSize: 45
    },
    text20: {
        fontSize: 20
    }
});

export default ComponentsScreen;
