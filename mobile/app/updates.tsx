import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "@/components/navigationbar";
import { useStudent } from "@/app/studentcontext";

const Updates = () => {
  const { student } = useStudent();

  if (!student) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationBar title="Updates" />
        <View style={styles.container}>
          <Text style={styles.infoText}>No student data available.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationBar title="Updates" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Student Details */}
        <Text style={styles.sectionTitle}>Student Details</Text>
        <View style={styles.detailsBox}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Name: </Text>{student.name}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Surname: </Text>{student.surname}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Student Number: </Text>{student.studentNumber}
          </Text>
        </View>

        {/* Course List */}
        <View style={styles.courseBox}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseHeaderText}>Course List</Text>
            <Text style={styles.courseHeaderText}>Start Dates</Text>
          </View>

          {student.courses.map((item, index) => (
            <View key={index} style={styles.courseRow}>
              <Text style={styles.courseText}>{item.name}</Text>
              <Text style={styles.courseText}>{item.startDate}</Text>
            </View>
          ))}
        </View>

        {/* Academic Status */}
        <Text style={styles.sectionTitle}>Academic Status</Text>
        <Text style={styles.pendingText}>{student.status}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{student.message}</Text>
        </View>

        {/* Amount Due */}
        <Text style={styles.sectionTitle}>Amount Due</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{student.amountDue}</Text>
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
    justifyContent: "center",
    fontWeight: "bold",
  },
});
