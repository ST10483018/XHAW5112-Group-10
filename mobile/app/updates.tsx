import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "@/components/navigationbar";

const Updates = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar title="Updates" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Student Details */}
        <Text style={styles.sectionTitle}>Student Details</Text>
        <View style={styles.detailsBox}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Name: </Text>Nokthula
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Surname: </Text>Mazibuko
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Student N: </Text>231456789
          </Text>
        </View>

        {/* Course List */}
        <View style={styles.courseBox}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseHeaderText}>Course List</Text>
            <Text style={styles.courseHeaderText}>Start Dates</Text>
          </View>

          {[
            { course: "Sewing", date: "8th February 2026" },
            { course: "First Aid", date: "27th March 2026" },
            { course: "Cooking", date: "27th March 2026" },
            { course: "Landscaping", date: "8th February 2026" },
            { course: "Life Skills", date: "10th March 2026" },
          ].map((item, index) => (
            <View key={index} style={styles.courseRow}>
              <Text style={styles.courseText}>{item.course}</Text>
              <Text style={styles.courseText}>{item.date}</Text>
            </View>
          ))}
        </View>

        {/* Academic Status */}
        <Text style={styles.sectionTitle}>Academic Status</Text>
        <Text style={styles.pendingText}>Pending</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Your application is currently being processed. Look out for updates
            here soon.
          </Text>
        </View>

        {/* Amount Due */}
        <Text style={styles.sectionTitle}>Amount Due</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>No outstanding balance.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
    textAlign: "center",
  },
  detailsBox: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 3,
  },
  detailLabel: {
    fontWeight: "600",
  },
  courseBox: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    padding: 15,
    marginVertical: 15,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  courseHeaderText: {
    fontWeight: "700",
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  courseText: {
    fontSize: 15,
  },
  pendingText: {
    color: "#FFD700",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  infoBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    width: "100%",
  },
  infoText: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 20,
  },
});
