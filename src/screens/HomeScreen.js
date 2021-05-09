import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.text45}>Hi there!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Component')} title={'Go to components'}><Text
            style={styles.text20}>Go to Component Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List')}><Text style={styles.text20}>Go to List Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Image')}><Text style={styles.text20}>Go to Image Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')}><Text style={styles.text20}>Go to Counter Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Color')}><Text style={styles.text20}>Go to Color Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Square')}><Text style={styles.text20}>Go to Square Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Text')}><Text style={styles.text20}>Go to Text Demo</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Box')}><Text style={styles.text20}>Go to Box Demo</Text></TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
    },
    text45: {
        fontSize: 45,
        textAlign: 'center'
    },
    text20: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default HomeScreen;
