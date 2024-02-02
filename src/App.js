import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screen/Loginscreen';
import Registerscreen from './screen/Registerscreen';
import { StyleSheet } from './screen/styles';
import { Screen } from 'react-native-screens';
const Stack = createNativeStackNavigator();
import Homescreen from './screen/Homescreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen}  options={{ title: 'LoginScreen',
        headerStyle:{
          backgroundColor:'#8000FF',
          width:70,
        },
        headerTitleStyle:{
          fontWeight: 'bold',

        },
        headerTitleAlign:'center'}}/>
        <Stack.Screen name="Register" component={Registerscreen} />
        <Stack.Screen name="Home" component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
