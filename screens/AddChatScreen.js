import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input, Icon } from "@rneui/base";
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat Room",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const [input, setinput] = useState("");
  const createChat = async () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCAY9UWTMsGskvedESIV5uAqpz-xPToPnw",
        authDomain: "signal-clone-furu.firebaseapp.com",
        projectId: "signal-clone-furu",
        storageBucket: "signal-clone-furu.appspot.com",
        messagingSenderId: "643696688642",
        appId: "1:643696688642:web:db667ba66654a8bb7e711b"
      };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "chats"), {
        chatName: input,
      }).then(()=>{
        navigation.navigate('Home')
      }).catch(error=>alert(error));

  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setinput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:30,
    height:"100%"
  },
});
