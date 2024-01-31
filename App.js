import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  function ScreenNameTracker() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [currentScreenName, setCurrentScreenName] = useState("");

    useEffect(() => {
      if (isFocused) {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      }
    }, [isFocused, navigation]);

    useEffect(() => {
      const unsubscribe = navigation.addListener("state", () => {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      });
      console.log(currentScreenName);

      return unsubscribe;
    }, [navigation]);

    if (currentScreenName !== "Send") {
      return <View style={styles.btmnav}>{/* <BottomNav /> */}</View>;
    } else {
      return <View style={styles.btmnav}>{/* <BottomNav /> */}</View>;
    }
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ animation: "none" }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Savings"
              component={Savings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Investments"
              component={Investments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
          <ScreenNameTracker />
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 20,
  },
  btmnav: {
    position: "absolute",
    bottom: -10,
    left: 10,
    right: 10,
  },
});
