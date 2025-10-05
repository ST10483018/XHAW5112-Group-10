import { View, Text } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";

const garden_maintenance = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar title = "Garden Maintenance"/>
    </SafeAreaView>
  )
}

export default garden_maintenance