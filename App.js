import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "./utils";
import { Themes } from "./assets/Themes";
import TopTracks from "./components/TopTracks";
import "react-native-gesture-handler";

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const tracks = useSpotifyTracks(token);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <TopTracks tracks={tracks} />;
  } else {
    contentDisplayed = (
      <Pressable style={styles.loginButton} onPress={() => getSpotifyAuth()}>
        <Text style={styles.loginText}>Connect with Spotify</Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
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
