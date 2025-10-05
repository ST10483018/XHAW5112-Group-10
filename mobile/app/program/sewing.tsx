import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";

const sewing = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar title = "Sewing" />
    </SafeAreaView>
  )
}

export default sewing