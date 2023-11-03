import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "./utils";
import { Themes } from "./assets/Themes";
import TopTracks from "./components/TopTracks";
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import { AuthContext } from "./utils/authContext";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    flex: 1,
  },
  loginButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    color: Themes.colors.white,
    borderRadius: 999999,
  },
  loginText: {
    color: Themes.colors.white,
  },
});
