import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import images from "../assets/Images/images";
import { Themes } from "../assets/Themes";
import { useNavigation } from "@react-navigation/native";
import Search from "../screens/SearchScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={images.spotify} />
        <Text style={styles.text}>My Top Tracks</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search-outline" size={25} color={Themes.colors.white} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingBottom: "2%",
  },
  logo: {
    width: 30,
    height: 30,
  },
  text: {
    color: Themes.colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10%",
  },
});
