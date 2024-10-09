import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";

let pets = [
  {
    animal: "cao",
    name: "sarnento",
    age: 2,
  },
  {
    animal: "cat",
    name: "jurubeba",
    age: 1,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {pets.map((pet, index) => (
        <View key={index}>
          {pet.animal === "cao" ? (
           <>
            <Text>
              Who let the dogs out: {pet.name}, {pet.age}
            </Text>
            <Image source={require("./assets/images/doguinho_caramelo.jpeg")}/>
           </>
          ) : (
            <Text>Are we in Jumanji {pet.name}?</Text>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  animalContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
});
