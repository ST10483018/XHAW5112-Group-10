import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Back from '@/components/back';
import Apply from '@/components/apply';

const life_skills = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.title}>Life Skills</Text>
      </View>
      <View>
        <Apply/>
      </View>
    </SafeAreaView>
  )
}



export default life_skills

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