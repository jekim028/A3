import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { Themes } from "../assets/Themes";

import TopTracks from "../components/TopTracks";
import Header from "../components/Header";

export default function HomeScreen({ route, navigation }) {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const tracks = useSpotifyTracks(token);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = (
      <View>
        <Header />
        <TopTracks tracks={tracks} />
      </View>
    );
  } else {
    contentDisplayed = (
      <Pressable style={styles.loginButton} onPress={() => getSpotifyAuth()}>
        <Text style={styles.loginText}>Connect with Spotify</Text>
      </Pressable>
    );
  }

  return <View style={styles.container}>{contentDisplayed}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
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
