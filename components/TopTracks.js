import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import Header from "./Header";

const renderTrack = (item, index) => {
  const { imageUrl, albumName, songTitle, songArtists, duration } = item;

  const artists = songArtists.map(({ name }) => `${name}`).join(", ");

  return (
    <View style={styles.trackCell}>
      <Text numberOfLines={1} style={[styles.text, styles.indexContent]}>
        {index}
      </Text>
      <Image style={styles.albumCover} source={{ uri: imageUrl }} />
      <View style={styles.songInfo}>
        <View>
          <Text numberOfLines={1} style={[styles.text, styles.songTitle]}>
            {songTitle}
          </Text>
        </View>
        <View>
          <Text numberOfLines={1} style={[styles.text, styles.artists]}>
            {artists}
          </Text>
        </View>
      </View>
      <Text numberOfLines={1} style={[styles.text, styles.albumName]}>
        {albumName}
      </Text>
      <Text numberOfLines={1} style={[styles.text, styles.duration]}>
        {millisToMinutesAndSeconds(duration)}
      </Text>
    </View>
  );
};

const TopTracks = ({ tracks }) => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={tracks}
        renderItem={(item, index) => renderTrack(item.item, item.index + 1)} // index is 0-indexed
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

export default TopTracks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: Themes.colors.white,
  },
  trackCell: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: "2%",
    justifyContent: "space-between",
    gap: "2%",
  },
  albumCover: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  duration: {
    flex: 1.5,
    alignSelf: "center",
    color: Themes.colors.gray,
  },
  albumName: {
    flex: 4,
    alignSelf: "center",
  },
  songInfo: {
    flex: 5.5,
    paddingLeft: "2%",
    gap: "2%",
    justifyContent: "center",
  },
  indexContent: {
    flex: 1.2,
    alignSelf: "center",
    textAlign: "center",
    color: Themes.colors.gray,
  },
  artists: {
    color: Themes.colors.gray,
    flex: 1,
  },
});
