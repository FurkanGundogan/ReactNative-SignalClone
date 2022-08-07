import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAuth } from "firebase/auth";
const HomeScreen = () => {
  const auth = getAuth();
  console.log(auth)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})