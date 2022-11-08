import React from "react";
import { View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {Tabs} from './src/navigation'

const App = () => {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>  
    )};


export default App;