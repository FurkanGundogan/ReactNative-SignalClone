import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { getAuth,signOut  } from "firebase/auth";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/base";
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();
  
  const signOutUser=()=>{
    signOut(auth).then(()=>navigation.replace("Login"))
  }

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
                uri: auth?.currentUser?.photoURL
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight:()=>(
        <View style={{
          flexDirection:"row",
          justifyContent:"space-between",
          width:80,
          height:20
        }}>
          <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="camerao" size={20} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
          <SimpleLineIcons name="pencil" size={20} color="black"/>
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem></CustomListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
