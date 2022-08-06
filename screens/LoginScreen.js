import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image } from "@rneui/base";
import { Button, Input } from "@rneui/themed";
import { KeyboardAvoidingView } from "react-native";
const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/signallogo.png")}
        style={{ width: 160, height: 160,marginBottom:32}}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
        <Button
          containerStyle={styles.button}
          title={"Login"}
          onPress={signIn}
        />
        <Button
          containerStyle={styles.button}
          type="outline"
          title={"Register"}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white" 
    },
  inputContainer: {
    width:300,
    alignItems:"center",
        justifyContent:"center",
  },
  containerStyle: {},
  button:{
    width:200,
    marginTop:10
  }
});
