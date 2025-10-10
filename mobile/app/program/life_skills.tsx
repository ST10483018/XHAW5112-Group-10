import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Back from '@/components/back';
import Apply from '@/components/apply';

const life_skills = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Back />
          <Text style={styles.title}>Life Skills</Text>
        </View>
        <View>
        
          <Text style={styles.title2}>6 Month Life Skills Course</Text>

          <Image
            source={require("@/_images/group-of-young-people-talking.jpg")}
            style={styles.mainImage}
          />

          <Text style={styles.purpose}>
            Purpose: To provide skills to navigate basic life necessities.
          </Text>

          <Text style={styles.contentHeading}>Course Content:</Text>
          <Text style={styles.list}>• Opening a bank account</Text>
          <Text style={styles.list}>• Basic labour law (know your rights)</Text>
          <Text style={styles.list}>• Basic reading and writing literacy</Text>
          <Text style={styles.list}>• Basic numeric literacy</Text>

          <Text style={styles.price}>Price for course: R1500</Text>

          <View style={styles.imageRow}>
            <Image
              source={require("@/_images/group-of-young-people-talking.jpg")}
              style={styles.secondaryImage}
            />
            <Image
              source={require("@/_images/group-of-young-people-talking.jpg")}
              style={styles.secondaryImage}
            />
          </View>
        
        </View>
        <View style={{padding: 20}}>
        </View>
      </SafeAreaView>
      <View>
          <Apply />
      </View>
    </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  mainImage: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20
  },
  purpose: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  contentHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 8,
  },
  list: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 4,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    color: "#444",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  secondaryImage: {
    width: "48%",
    height: 140,
    borderRadius: 10,
  },

  title2: {
    fontSize:20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20 
  }
})