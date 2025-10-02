import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
   
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="programmes" options={{headerShown: false}}/>
        <Stack.Screen name="contact" options={{headerShown: false}}/>
        <Stack.Screen name="updates" options={{headerShown: false}}/>
        <Stack.Screen name="admissions" options={{headerShown: false}}/>
      </Stack>
    
  )
}
