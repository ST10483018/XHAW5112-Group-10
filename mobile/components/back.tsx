import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Back() {
  const navigation = useNavigation();

  return (
    <View  style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("programmes")}>
      <Image
        source={require("@/_images/back.png")}
        style={styles.back}
      />
    </TouchableOpacity>
    
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", 
    left: 16,
    top: 15,
    zIndex: 10,           
  },
  back: {
    width: 25,
    height: 25,
    tintColor: "black",
  },
});
