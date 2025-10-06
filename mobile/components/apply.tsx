import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const apply = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("admissions")}>
        <Text style={styles.apply }>Apply</Text>
    </TouchableOpacity>
  )
}

export default apply

const styles = StyleSheet.create({
    apply: {
        backgroundColor: "#2C2C2C",
        paddingVertical: 6,
        paddingHorizontal: 11,
        color: "#fff",
        width:120,
        textAlign: "center",
        alignSelf:"center",
        borderRadius:8,
        paddingTop:15,
        paddingBottom:15,
        fontSize: 16,
        fontWeight: "bold"
    }

})