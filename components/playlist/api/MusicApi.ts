import axios from "axios";

export const GetMusic = async () => {
  const { data } = await axios.get(
    "https://corsproxy.io/?https://api.deezer.com/chart/0/tracks?limit=100",
  );
  return data.data || [];
};
