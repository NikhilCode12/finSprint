import React from "react";
import { View, Image, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/splash.png")} style={styles.image} />
      <Button title="Splash!" onPress={() => console.log("Button pressed!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
  },
});

export default HomeScreen;
