import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";

const validatePassword = (password)=>password.length>=5;

const TextScreen = ()=>{
    const [password, setPassword] = useState("");

    return <View>
        <Text>Enter Password:</Text>
        <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(val)=>setPassword(val)}/>
        {!validatePassword(password) &&  <Text>Password must contain at least 5 characters</Text>}
    </View>;
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth: 1
    }
});
export default TextScreen;
