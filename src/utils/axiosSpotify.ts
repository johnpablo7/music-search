import axios from "axios";

export const axiosSpotify = axios.create({
  baseURL: "https://api.spotify.com",
});

export const setAxiosAuth = (token: string) => {
  const value = token ? "Bearer " + token : "";
  axiosSpotify.defaults.headers.common["Authorization"] = value;
};
