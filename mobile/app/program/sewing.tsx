import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from '@/components/back';
import Apply from '@/components/apply';

const sewing = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
          <Back />
          <Text style={styles.title}>Sewing</Text>
        </View>
    <ScrollView style={styles.container}>
        <View>
        
          <Text style={styles.title2}>6 Month Sewing Course</Text>

          <Image
            source={require("@/_images/steptodown.com898711.jpg")}
            style={styles.mainImage}
          />

          <Text style={styles.purpose}>
            Purpose: To provide alterations and new garment tailoring services.
          </Text>

          <Text style={styles.contentHeading}>Course Content:</Text>
          <Text style={styles.list}>• Types of stitches</Text>
          <Text style={styles.list}>• Threading a sewing machine</Text>
          <Text style={styles.list}>• Sewing buttons, zips, hems and seams</Text>
          <Text style={styles.list}>• Alterations</Text>
          <Text style={styles.list}>• Designing and sewing new garments</Text>

          <Text style={styles.price}>Price for course: R1500</Text>

          <View style={styles.imageRow}>
            <Image
              source={require("@/_images/steptodown.com898711.jpg")}
              style={styles.secondaryImage}
            />
            <Image
              source={require("@/_images/steptodown.com898711.jpg")}
              style={styles.secondaryImage}
            />
          </View>
        
        </View>
        <View style={{padding: 20}}>
        </View>
      <View>
          <Apply />
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}


export default sewing

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
  }
})

