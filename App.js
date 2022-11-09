import React, {useState} from "react";
import { View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {Tabs, AccountStack} from './src/navigation'

const App = () => {

  const [isLogin, setIsLogin] = useState(false);

    return (
      <NavigationContainer>
       {isLogin ? (<Tabs />) : (<AccountStack />)}
      </NavigationContainer>  
    )};


export default App;