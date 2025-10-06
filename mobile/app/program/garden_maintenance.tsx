import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from '@/components/back';
import Apply from '@/components/apply';

const garden_maintenance = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.title}>Garden Maintenance</Text>
      </View>
      <View>
        <Apply/>
      </View>
    </SafeAreaView>
  )
}


export default garden_maintenance

const styles = StyleSheet.create({
header: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

})