import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute, DrawerActions } from "@react-navigation/native";

export default function NavigationBar({ title = "Empowering the Nation" }) {
  const navigation = useNavigation<any>();
  const route = useRoute(); //  gives current screen name
  

  // current route name (e.g., "index", "programmes", etc.)
  const currentRoute = route.name;

  const navItems = [
    { name: "Home", route: "index" },
    { name: "Programmes", route: "programmes" },
    { name: "Admissions", route: "admissions" },
    { name: "Updates", route: "updates" },
  ];

  return (
    <>
      {/* 🔹 Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image style={styles.image} source={require("@/_images/logo.png")} />
        </TouchableOpacity>
        <Text style={styles.heading}>{title}</Text>
      </View>

      {/* 🔹 Navigation Row */}
      <View style={styles.navRow}>
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <TouchableOpacity
              key={item.route}
              style={[styles.navBtn, isActive && styles.activeBtn]}
              onPress={() => navigation.navigate(item.route)}
            >
              <Text style={[styles.inactiveText, isActive && styles.activeText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 50,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    paddingHorizontal: 10,
    
  },
  navBtn: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C2C2C2",
    backgroundColor: "#fff",
  },
  activeBtn: {
    backgroundColor: "#0051FF",
    borderColor: "#0051FF",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  inactiveText: {
    color: "#000",
    fontSize: 14,
  },
});
