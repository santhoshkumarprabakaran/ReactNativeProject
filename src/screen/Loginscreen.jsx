import React, { useState } from 'react';
import { View, Text, Button,TextInput,TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles'; 


const Loginscreen = ({ navigation }) => {
  const [text, setText] =useState('');
  const[password,setpassword]=useState('');
  const [validate,setvalidate]=useState('');
  const [errorMessage,setErrorMessage]=useState(false);
  const [errorMessagepassword,setErrorMessagepassword]=useState(false);
  const usernamechange=(text)=>{
    setText(text);
    setErrorMessage(false);
    };
  const passwordchange=(text)=>{
    setpassword(text);
    setErrorMessagepassword(false);
  };
  const changescreen=()=>{
    if(!text && !password){
      setErrorMessage(true)
      setErrorMessagepassword(true);
    }
    else if(!text){
      setErrorMessage(true)
    }
    else if(!password){
      setErrorMessagepassword(true);
    }
    else{
      navigation.navigate('Home', { value: text })
    }
  };
  return (
    <View style={styles.container} >
      <Text style={styles.textstyle}>
        Username
      </Text>
      {errorMessage ?(<TextInput style={styles.textinputbordererror} onChangeText={usernamechange}/>):( <TextInput style={styles.textinputborder} onChangeText={usernamechange}/>)}
      {errorMessage?<Text style={styles.errormessage}>Enter valid username</Text>:<Text></Text>}
      <Text style={styles.textstyle}>
        Password
      </Text>
      {errorMessagepassword ?(<TextInput style={styles.textinputbordererror} onChangeText={passwordchange}/>):( <TextInput style={styles.textinputborder} onChangeText={passwordchange}/>)}
      {errorMessagepassword?<Text style={styles.errormessage}>Enter valid Password</Text>:<Text></Text>}
      <TouchableOpacity style={styles.toublebutton} onPress={changescreen}>
        <Text style={styles.textstylefortochable}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loginscreen;
