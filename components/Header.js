import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import images from "../assets/Images/images";
import { Themes } from "../assets/Themes";
import Search from "./Search";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={images.spotify} />
        <Text style={styles.text}>My Top Tracks</Text>
      </View>
      <Search />
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
    padding: "5%",
    paddingTop: 0,
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
