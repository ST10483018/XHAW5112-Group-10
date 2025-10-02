import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import Slider from "../components/slider";
import slider from "../components/slider";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Image style={styles.image} source={require("@/_images/logo.png")} />
      <Text style={styles.container}>Empowering the Nation</Text>
      <Slider/>
      <TouchableOpacity style={styles.bt2} onPress={() => router.push("../programmes")}>
        <Text>Programmes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn1}>
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt3} onPress={() => router.push("../admissions")}>
        <Text>Admission</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bt4} onPress={() => router.push("../updates")}>
        <Text>Updates</Text>
      </TouchableOpacity>
    </View>
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

  btn1: {
    padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 104,
    width: 75,
    height: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    position: 'absolute',
    top: 60,

  },
  bt2: {
    padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 104,  
    width: 110,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 95,
    position: 'absolute',
    top: 60,
  },

  bt3: {
     padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 104,  
    width: 85,
    height: 24,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 210,
    position: 'absolute',
    top: 60,
  },

  bt4: {
     padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 104,  
    width: 70,
    height: 24,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 300,
    position: 'absolute',
    top: 60,
  },

  image: {
    width: 64, 
    height: 64, 
    marginLeft: 20, 
    marginTop: 70
  },

  slider:{
    marginTop: 150,
  }

})