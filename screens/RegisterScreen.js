import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input,Text } from "@rneui/themed";
const RegisterScreen = ({navigation}) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const register = () => {

    }
    useLayoutEffect(() => {
        navigation.setOptions({
        headerBackTitle:"Login",
        
    })
    }, [navigation])
  return (
    <KeyboardAvoidingView behavior='padding'
    style={styles.container}
    >
        <StatusBar style='light'/>
      <Text h3 style={{marginBottom:50}}>Create a Signal Account</Text>
      <View style={styles.inputContainer}>
        <Input 
        placeholder='Full Name'
        autoFocus
        type="text"
        value={name}
        onChangeText={(text)=>setname(text)}
        />
        <Input 
        placeholder='Email'
        type="text"
        value={email}
        onChangeText={(text)=>setemail(text)}
        />
        <Input 
        placeholder='Password'
        type="text"
        value={password}
        secureTextEntry
        onChangeText={(text)=>setPassword(text)}
        />
         <Input 
        placeholder='Profile Picture URL (optional)'
        type="text"
        value={imgUrl}
        onChangeText={(text)=>setImgUrl(imgUrl)}
        onSubmitEditing={register}
        />
        
      </View>
      <Button title="Register" raised  onPress={register}
      containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    button:{
        width:200,
        marginTop:10
      },
      inputContainer:{
        width:300
      }
})