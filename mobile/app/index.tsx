import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Slider from "../components/slider";
import Carousel from "../components/carousel";
import NavigationBar from "@/components/navigationbar";

const DATA = [
  { 
    id: "1", 
    text: "What is Empowering the Nation",
    description: "Founded in 2022, Empowering the Nation provides classes in Johannesburg. In order to empower themselves and equip them with more marketable skills, hundreds of gardeners and domestic workers have participated in the six-week Short Skills Training Programs and the six-month Learnerships."
  },
  { id: "carousel", type: "carousel" },
  {id:"3", text: "Our Goals", description: "Our primary focus is on providing high-quality training to domestic workers and gardeners. We offer two main programs: a six-month Learnership program and a six-week Short Skills Training Programme. Through these courses, we have successfully trained hundreds of individuals, helping them to develop marketable skills and achieve greater economic independence."}
];

export default function Index() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Navigation bar */}
      <NavigationBar title = "Empowering the Nation" />

      {/* FlatList with Slider + Content */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.type === "carousel") {
            return (
              <View>
                <Text style={styles.sectionHeading}>Our Programmes</Text>
                <Carousel />
              </View>
            );
          }
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
              {item.description && (
                <Text style={styles.description}>{item.description}</Text>
              )}
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Slider />}
        contentContainerStyle={{ marginTop: -25 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },

});
