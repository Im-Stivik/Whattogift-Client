import React from "react";
import { View, Text, Button } from "react-native";
import Styles from '../../../src/utilis/AppStyle';

const Dashboard = (props) => {
    return (
        <View style={Styles.conrainer}>
        <Text>Dashboard</Text>
        <Button onPress={() =>{props.navigation.navigate('test')}} />
        </View>
    );
    }

export default Dashboard;