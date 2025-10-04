import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, Image } from "react-native";

import Index from "@/app/index";
import programmes from "@/app/programmes";
import admissions from "@/app/admissions";
import updates from "@/app/updates";
import contact from "@/app/contact";

const Drawer = createDrawerNavigator();

const drawermenu = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()} // open/close drawer
            >
              <Image
                source={require("@/_images/logo.png")} // 👈 your custom image
                style={{ width: 25, height: 25, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={Index} />
        <Drawer.Screen name="Programmes" component={programmes} />
        <Drawer.Screen name="Admission" component={admissions} />
        <Drawer.Screen name="Updates" component={updates} />
        <Drawer.Screen name="Contact" component={contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default drawermenu;
