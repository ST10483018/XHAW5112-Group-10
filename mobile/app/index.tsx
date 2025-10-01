import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity style={styles.bt2} onPress={() => router.push("../contact")}>
        <Text>contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn1}
        onPress={() => router.push("../programmes")} 
        >
            <Text>Go to Updates</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontSize: 16,

  },

  btn1: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 1,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 104,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 100,
    position: 'absolute',

  },
  bt2: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 1,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginTop: 120,  
    width: 150,    
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 100,
    position: 'absolute',
  }

})