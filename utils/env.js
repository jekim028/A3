import { Platform } from "react-native";

const CLIENT_ID = "a3842753755b428892b3df086d5dcbec";
const REDIRECT_URI = "exp://10.37.167.123:19000";
const ALBUM_ID = "2nLOHgzXzwFEpl62zAgCEC?si=Vy8vkAwuT-GJ_nEKsoo2DA"; // By default, this is the Weeknd's album "DAWN FM"

const redirectUri = (uri) => {
  if (!uri) {
    const err = new Error(
      "No redirect URI provided.\nPlease provide a redirect URI in env.js.\n You can find the file in utils/env.js."
    );
    console.error(err);
    alert(err);
  }
  return Platform.OS === "web" ? "http://localhost:19006/" : uri;
};

const ENV = {
  CLIENT_ID: CLIENT_ID,
  SCOPES: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ],
  REDIRECT_URI: redirectUri(REDIRECT_URI),
  ALBUM_ID: ALBUM_ID,
  SPOTIFY_API: {
    // Endpoints for auth & token flow
    DISCOVERY: {
      authorizationEndpoint: "https://accounts.spotify.com/authorize",
      tokenEndpoint: "https://accounts.spotify.com/api/token",
    },
    TOP_TRACKS_API: "https://api.spotify.com/v1/me/top/tracks",
    ALBUM_TRACK_API_GETTER: (albumId) => "https://api.spotify.com/v1/TODO",
    SEARCH_API: (q) => `https://api.spotify.com/v1/search?q=${q}&type=track`,
  },
};

const getEnv = () => ENV;
export default getEnv;
// ^ use this type of exporting to ensure compliance with webpack and expo-web
