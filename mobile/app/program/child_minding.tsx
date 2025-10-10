import { View, Text, Image, ScrollView, StyleSheet, } from 'react-native'
import React from 'react'
import NavigationBar from "@/components/navigationbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from '@/components/back';
import Apply from '@/components/apply';

const child_minding = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
          <Back />
          <Text style={styles.title}>Child Minding</Text>
        </View>
    <ScrollView style={styles.container}>  
        
        <View>
        
          <Text style={styles.title2}>6 Week Child Minding Course</Text>

          <Image
            source={require("@/_images/steptodown.com525012.jpg")}
            style={styles.mainImage}
          />

          <Text style={styles.purpose}>
            Purpose: To provide basic child and baby care.
          </Text>

          <Text style={styles.contentHeading}>Course Content:</Text>
          <Text style={styles.list}>• Birth to six-month old baby needs</Text>
          <Text style={styles.list}>• Seven-month to one year old needs</Text>
          <Text style={styles.list}>• Toddler needs</Text>
          <Text style={styles.list}>• Educational toys</Text>

          <Text style={styles.price}>Price for course: R750</Text>

          <View style={styles.imageRow}>
            <Image
              source={require("@/_images/steptodown.com525012.jpg")}
              style={styles.secondaryImage}
            />
            <Image
              source={require("@/_images/steptodown.com525012.jpg")}
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



export default child_minding

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