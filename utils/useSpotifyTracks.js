import { useState, useEffect } from "react";
import getEnv from "./env";

import { getMyTopTracks, getAlbumTracks } from "./apiOptions";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token) => {
  const [tracks, setTracks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyTopTracks(token);
      setTracks(response);
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  return tracks;
};

export default useSpotifyTracks;
