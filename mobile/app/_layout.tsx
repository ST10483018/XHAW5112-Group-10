import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false, // ✅ remove default header
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="admissions"
          options={{
            drawerLabel: "Admissions",
          }}
        />
        <Drawer.Screen
          name="programmes"
          options={{
            drawerLabel: "Programmes",
          }}
        />
        <Drawer.Screen
          name="updates"
          options={{
            drawerLabel: "Updates",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
