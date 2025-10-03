import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import Slider from "../components/slider";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "../components/carousel";
import Drawermenu from "../components/drawermenu";

const DATA = [
  { 
    id: "1", 
    text: "What is Empowering the Nation",
    description: "Founded in 2022, Empowering the Nation provides classes in Johannesburg. In order to empower themselves and equip them with more marketable skills, hundreds of gardeners and domestic workers have participated in the six-week Short Skills Training Programs and the six-month Learnerships."
  },
  { id: "carousel", type: "carousel" },
  { id: "2", text: "Second item" },
  { id: "3", text: "Third item" },

];


export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }} >
      {/* Navigation bar */}
      <View style={styles.navBar}>
    <Image style={styles.image} source={require("@/_images/logo.png")} />
    <Text style={styles.heading}>Empowering the Nation</Text>
    <View style={styles.navRow}>
      <TouchableOpacity style={styles.navBtn1}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBtn2} onPress={() => router.push("../programmes")}>
        <Text>Programmes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBtn3} onPress={() => router.push("../admissions")}>
        <Text>Admission</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBtn4} onPress={() => router.push("../updates")}>
        <Text>Updates</Text>
      </TouchableOpacity>
    </View>
  </View>

      {/* Flat list */}

      <FlatList
        style={styles.flatstyle}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.type === "carousel") {
            return  (
      <View >
        <Text style={styles.sectionHeading}>Programs</Text>
        <Carousel />
      </View>
    ); // 👈 render Carousel when special item
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
        contentContainerStyle={{ paddingTop: 75 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -20,
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
  },

  flatstyle: {
    backgroundColor: "white"
  },

  image: {
    width: 64, 
    height: 64, 
    marginLeft: 20, 
    marginTop: 25,
  },

   heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -45,
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    
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
  marginBottom: 20,
  textAlign: "center",
  color: "black",
  },
  description: {
    fontSize: 14,
  },

navBar: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  paddingTop: 20,
  paddingBottom: 10,
  zIndex: 10,
  elevation: 5, // shadow on Android
},
navRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 30,
},

navBtn1: {
  padding: 2,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#0051FF',
    alignItems: 'center', 
    width: 75,
    height: 24,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#fff",// try and fix the colour
},

navBtn2: {
  padding: 2,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: 'white',
    alignItems: 'center',  
    width: 110,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
},

navBtn3: {
   padding: 2,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 85,
    height: 24,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
},

navBtn4: {
  padding: 2,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 75,
    height: 24,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
},

sectionHeading: {
  fontSize: 22,
  fontWeight: "bold",
  marginBottom: 20,
  textAlign: "center",
  color: "black",
},

})