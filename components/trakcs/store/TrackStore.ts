import { makeAutoObservable, runInAction } from 'mobx';
import {
  GetAllPlaylist,
  GetMusic,
  GetPlaylist,
  PLaylist,
  Track,
} from '../api/MusicApi';

class PlayerStore {
  isPlaying = false;
  tracks: Track[] = [];
  playlist: PLaylist[] = [];
  currentTrack: Track | null = null;
  duration = 0;
  currentTime = 0;
  searchValue = '';
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  async searchTracks(query: string) {
    try {
      this.loading = true;

      const data = await GetMusic();
      runInAction(() => {
        this.tracks = data;
      });
    } catch (e) {
      console.error(e);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
  async searchPlaylist(query: string) {
    try {
      this.loading = true;

      const data = await GetAllPlaylist();

      const filteredPlaylist = query
        ? data.filter((t: any) =>
            t.playlistTitle.toLowerCase().includes(query.toLowerCase())
          )
        : data;

      runInAction(() => {
        this.playlist = filteredPlaylist;
      });
    } catch (e) {
      console.error(e);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  setTrack(track: Track) {
    this.currentTrack = track;
    this.duration = 0;
    this.currentTime = 0;
    this.isPlaying = true;
  }

  setCurrentTrack(track: Track) {
    this.currentTrack = track;
    this.isPlaying = true;
  }

  toggleTrack(track: Track) {
    if (this.currentTrack?.id === track.id) {
      this.isPlaying = !this.isPlaying;
    } else {
      this.setTrack(track);
    }
  }

  setDuration(value: number) {
    this.duration = value;
  }
  setCurrentTime(value: number) {
    this.currentTime = value;
  }

  setPlaying(value: boolean) {
    this.isPlaying = value;
  }

  nextTrack() {
    if (!this.currentTrack) return;

    const index = this.tracks.findIndex((t) => t.id === this.currentTrack?.id);

    const next =
      index < this.tracks.length - 1 ? this.tracks[index + 1] : this.tracks[0];

    this.setCurrentTrack(next);
  }

  prevTrack() {
    if (!this.currentTrack) return;

    const index = this.tracks.findIndex((t) => t.id === this.currentTrack?.id);

    const prev =
      index > 0 ? this.tracks[index - 1] : this.tracks[this.tracks.length - 1];

    this.setCurrentTrack(prev);
  }
}

export const playerStore = new PlayerStore();
