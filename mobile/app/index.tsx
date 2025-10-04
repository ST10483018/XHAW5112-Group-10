import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Slider from "../components/slider";
import Carousel from "../components/carousel";

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
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.image} source={require("@/_images/logo.png")} />
        </TouchableOpacity>
        <Text style={styles.heading}>Empowering the Nation</Text>
      </View>

      {/* Nav Buttons Row */}
      <View style={styles.navRow}>
        <TouchableOpacity style={[styles.navBtn, styles.activeBtn]} onPress={() => navigation.navigate("index")}>
          <Text style={styles.activeText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate("programmes")}>
          <Text style={styles.inactiveText}>Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate("admissions")}>
          <Text style={styles.inactiveText}>Admissions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate("updates")}>
          <Text style={styles.inactiveText}>Updates</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList with Slider + Content */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.type === "carousel") {
            return (
              <View>
                <Text style={styles.sectionHeading}>Our Programs</Text>
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
    marginRight: 50, // balances the logo left
  
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  navBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
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
