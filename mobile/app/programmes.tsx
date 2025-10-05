import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "@/components/navigationbar";

const Programmes = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Navigation Bar */}
      <NavigationBar title="Our Programmes" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* --- Six-Month Courses --- */}
        <Text style={styles.heading}>Six-Month Courses</Text>

        <View style={styles.row}>
          {/* Sewing */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/sewing")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com898711.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Sewing</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Life Skills */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/life_skills")}
          >
            <ImageBackground
              source={require("@/_images/group-of-young-people-talking.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Life Skills</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Landscaping */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/landscaping")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com133499.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Landscaping</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* First Aid */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/first_aid")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com443846.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>First Aid</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* --- 6-Week Courses --- */}
        <Text style={[styles.heading, styles.subheading]}>6-Week Courses</Text>

        <View style={styles.row}>
          {/* Cooking */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/cooking")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com469316.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Cooking</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Child Minding */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/child_minding")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com525012.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Child Minding</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Garden Maintenance */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("program/garden_maintenance")}
          >
            <ImageBackground
              source={require("@/_images/steptodown.com633227.jpg")}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Garden Maintenance</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Programmes;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#000",
  },

  // Extra spacing before 6-week courses heading
  subheading: {
    marginTop: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },

  cardContainer: {
    width: 160,
    height: 120,
    marginVertical: 10,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  imageStyle: {
    borderRadius: 15,
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 6,
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
