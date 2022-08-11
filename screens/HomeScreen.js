import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/base";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();

  const signOutUser = () => {
    signOut(auth).then(() => navigation.replace("Login"));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            height: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddChat")}
          >
            <SimpleLineIcons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

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
  const [chats, setchats] = useState([]);
  const [loading, setloading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      querySnapshot(db);
    }, [db])
  );

  /*
 useEffect(() => {
  const unsubscribe = querySnapshot(db)
   return () => unsubscribe
 }, [db])
 */


  const querySnapshot = async (db) => {
    setloading(true)
    let allItems = [];
    let list = await getDocs(collection(db, "chats"));

    list &&
      list.forEach((doc) => {
        //console.log("doc data", doc.data());
        allItems.push({
          id: doc.id,
          data: doc.data(),
        });
      });

    setchats(allItems);
    setloading(false)
  };

  const enterChat = (id,chatName) =>{
    navigation.navigate("Chat",{
      id,
      chatName
    })
   }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && 
        <View style={{backgroundColor:"white"}}>
        <ActivityIndicator size="large" style={{padding:12}} />
        </View>
        }
        {chats?.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { height: "100%" },
});
