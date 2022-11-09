import React from "react";
import { View, Text, Button } from "react-native";
import Styles from '../../utilis/AppStyle'
import { TextInput } from "react-native-paper";

const Login = () => {
    let email = '';
    let password = '';
    return (
        <View
            value ={email} onChangeText = {(text) => {setEmail(text)}}
            style={Styles.conrainer}>
            <Text style = {Styles.Text}>Login</Text>
            <TextInput style = {Styles.input} 
            placeholder = "Email"
            keyboardType="email-address" 
            right={<TextInput.Icon icon="email"/>}/>

            <TextInput
            value = {password} onChangeText = {(text) => {setPassword(text)}}
            style = {Styles.input} 
            placeholder = "Password" 
            keyboardType="password"
            right={<TextInput.Icon icon="eye"/>} />

            <Button title = "Login"  style={Styles.SubmitButtonStyle} />
            <Button title = "Signup" style={Styles.SubmitButtonStyle} />
        </View>
    );
}

export default Login;