import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { initializeApp } from 'firebase/app';
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

export default function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyCAY9UWTMsGskvedESIV5uAqpz-xPToPnw",
    authDomain: "signal-clone-furu.firebaseapp.com",
    projectId: "signal-clone-furu",
    storageBucket: "signal-clone-furu.appspot.com",
    messagingSenderId: "643696688642",
    appId: "1:643696688642:web:db667ba66654a8bb7e711b"
  };
  const app = initializeApp(firebaseConfig);
  const Stack = createNativeStackNavigator();
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED"},
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
  };
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
     
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
