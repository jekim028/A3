import Ionicons from "@expo/vector-icons/Ionicons";
import { Themes } from "../assets/Themes";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../utils/authContext";
import TopTracks from "../components/TopTracks";
import { getSpotifySearch } from "../utils/apiOptions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SearchScreen = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);
  [q, setQ] = useState("");
  [searchResults, setSearchResults] = useState([]);
  [search, setSearch] = useState("false");

  const spotifySearch = async () => {
    const results = await getSpotifySearch(token, q);
    console.log(results);
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons style={styles.backIcon} name="chevron-back" size={25} />
        </Pressable>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={q}
          onChangeText={setQ}
          onSubmitEditing={spotifySearch}
        />
      </View>
      <TopTracks tracks={searchResults} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: Themes.colors.background,
    padding: "2%",
  },
  backIcon: {
    color: "white",
  },
  searchBar: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "5%",
    paddingBottom: "5%",
  },
});
