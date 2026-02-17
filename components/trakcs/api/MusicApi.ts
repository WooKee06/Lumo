import axios from 'axios';

export type Track = {
  id: number;
  title: string;
  artist: string;
  likes: string;
  src: string;
  imgPreview: string;
  listners: string;
};

export const GetMusic = async () => {
  const { data } = await axios.get<Track[]>('http://localhost:3000/api/tracks');
  return data;
};
