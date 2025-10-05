import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";

const child_minding = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar title = "Child Minding" />
    </SafeAreaView>
  )
}

export default child_minding