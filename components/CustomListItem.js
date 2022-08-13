import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, ListItem } from "@rneui/base";
import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setchatMessages] = useState([])
  const firebaseConfig = {
    apiKey: "AIzaSyCAY9UWTMsGskvedESIV5uAqpz-xPToPnw",
    authDomain: "signal-clone-furu.firebaseapp.com",
    projectId: "signal-clone-furu",
    storageBucket: "signal-clone-furu.appspot.com",
    messagingSenderId: "643696688642",
    appId: "1:643696688642:web:db667ba66654a8bb7e711b",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  useEffect(() => {
    const q = query(
      collection(db, `chats/${id}/messages`),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allItems = [];
      querySnapshot.forEach((doc) => {
        allItems.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setchatMessages(allItems);
    });

    () => unsubscribe();
  }, []);

  return (
    <ListItem key={id} bottomDivider onPress={()=>enterChat(id,chatName)}>
      <Avatar
      rounded
        source={{
          uri:  chatMessages?.[0]?.data?.photoUrl || "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.data?.displayName}: {chatMessages?.[0]?.data?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
