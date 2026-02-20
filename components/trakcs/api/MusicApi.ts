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
export type PLaylist = {
  id: number;
  playlistTitle: string;
  playlistAuthor: string;
  playlistImg: string;
  playlistTracks: Track[];
};

export const GetMusic = async () => {
  const { data } = await axios.get<Track[]>('http://localhost:3000/api/tracks');
  return data;
};

export const GetAllPlaylist = async () => {
  const { data } = await axios.get<PLaylist[]>(
    'http://localhost:3000/api/playlist'
  );
  console.log(data);
  return data;
};
export const GetPlaylist = async (id: number) => {
  const { data } = await axios.get<PLaylist[]>(
    `http://localhost:3000/api/playlist/id=${id}`
  );
  return data;
};
