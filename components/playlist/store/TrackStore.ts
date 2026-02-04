import { makeAutoObservable } from 'mobx';
import { Track } from '../api/MusicApi';

class PlayerStore {
  isPlaying = false;
  tracks: Track[] = [];
  currentTrack: Track | null = null;
  duration = 0;
  currentTime = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTracks(tracks: Track[]) {
    this.tracks = tracks;
  }

  setTrack(track: Track) {
    this.duration = 0;
    this.isPlaying = true;
    this.currentTime = 0;
  }

  setPlaying(value: boolean) {
    this.isPlaying = value;
  }

  setDuration(value: number) {
    this.duration = value;
  }

  setCurrentTime(value: number) {
    this.currentTime = value;
  }

  setCurrentTrack(track: Track) {
    this.currentTrack = track;
    this.isPlaying = true;
  }
}

export const playerStore = new PlayerStore();
