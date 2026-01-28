import axios from "axios";

export const GetMusic = async () => {
  const { data } = await axios.get("");
  return data.data || [];
};
