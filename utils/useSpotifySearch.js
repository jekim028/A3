import { useState, useEffect } from "react";

import { getSpotifySearch } from "./apiOptions";

const useSpotifySearch = (token, q) => {
  const [searchResults, setSearchResults] = useState("");
  console.log("token:", token);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSpotifySearch(token, q);
      setSearchResults(response);
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  return searchResults;
};

export default useSpotifySearch;
