import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { Avatar } from "@rneui/base";
import { AntDesign, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "false",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            source={{
              uri: "https://img.favpng.com/8/18/8/online-chat-computer-icons-png-favpng-egTg6NbQBirwLwQRtFEDh8y33.jpg",
            }}
            rounded
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <SimpleLineIcons name="camrecorder" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="phone" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage =()=>{

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "white"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Message..."
              style={styles.textInput}
              value={input}
              onChangeText={(text) => setInput(text)}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <SimpleLineIcons name="arrow-right" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  footer: {
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    padding:15
  },
  textInput: {
    bottom:0,
    height:40,
    flex:1,
    marginRight:5,
    borderColor:"transparent",
    backgroundColor:"#ECECEC",
    padding:10,
    color:"gray",
    borderRadius:30

  },
});
