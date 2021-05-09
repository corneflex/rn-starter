import React, {useState, useReducer} from "react";
import {Text, View, StyleSheet} from "react-native";
import ColorAdjuster from '../components/ColorAdjuster';

const INCREMENT_AMOUNT = 10;
const validColor = (color) => color < 256 && color >= 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'change_color':
            const newColor = (state[action.payload.color] + action.payload.amount* INCREMENT_AMOUNT) ;
            return (validColor(newColor)) ? {...state, ...{[action.payload.color]: newColor}} : state;
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return <View>
        <ColorAdjuster colorName="Red"
                       onIncrease={color => dispatch({type: 'change_color', payload: {color: 'red', amount: 1}})}
                       onDecrease={color => dispatch({type: 'change_color', payload: {color: 'red', amount: -1}})}
                       color={state.red}/>
        <ColorAdjuster colorName="Green"
                       onIncrease={color => dispatch({type: 'change_color', payload: {color: 'green', amount: 1}})}
                       onDecrease={color => dispatch({type: 'change_color', payload: {color: 'green', amount: -1}})}
                       color={state.green}/>
        <ColorAdjuster colorName="Blue"
                       onIncrease={color => dispatch({type: 'change_color', payload: {color: 'blue', amount: 1}})}
                       onDecrease={color => dispatch({type: 'change_color', payload: {color: 'blue', amount: -1}})}
                       color={state.blue}/>
        <View style={{backgroundColor: `rgba(${state.red},${state.green},${state.blue},1.0)`, width: 100, height: 100}}/>
    </View>;
}

const styles = StyleSheet.create({});

export default SquareScreen;
