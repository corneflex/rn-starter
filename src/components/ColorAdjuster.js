import React, {useState} from 'react';
import {View, Button, StyleSheet} from "react-native";

const ColorAdjuster = ({colorName, color, onIncrease, onDecrease})=>{
    return (<View>
        <Button title={`More ${colorName}`} onPress={()=>(color<256 && onIncrease())}/>
        <Button title={`Less ${colorName}`} onPress={()=>(color>=0 && onDecrease())}/>
    </View>);
}

export default ColorAdjuster;
