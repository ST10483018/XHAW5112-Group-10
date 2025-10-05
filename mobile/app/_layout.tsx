import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import customdrawer from "@/components/customdrawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={customdrawer}
        screenOptions={{
          headerShown: false,// remove default header
          drawerActiveTintColor: "#fff", 
          drawerActiveBackgroundColor:  "#0051FF",
          
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="programmes"
          options={{
            drawerLabel: "Programmes",
          }}
        />
        <Drawer.Screen
          name="admissions"
          options={{
            drawerLabel: "Admissions",
          }}
        />
        <Drawer.Screen
          name="updates"
          options={{
            drawerLabel: "Updates",
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contact",
          }}
        />

        <Drawer.Screen
          name="program/sewing"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/cooking"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/first_aid"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/landscaping"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/life_skills"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/child_minding"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />

        <Drawer.Screen
          name="program/garden_maintenance"
          options={{
            drawerItemStyle:{display: "none"}
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
