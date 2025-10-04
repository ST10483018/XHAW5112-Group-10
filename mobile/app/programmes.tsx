import { View, Text, } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import NavigationBar from "@/components/navigationbar";

const programmes = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar />
    </SafeAreaView>
  )
}

export default programmes