import { makeAutoObservable } from 'mobx';
import { Track } from '../api/MusicApi';

class PlayerStore {
  isPlaying = false;
  tracks: Track[] = [];
  currentTrack: Track | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTracks(tracks: Track[]) {
    this.tracks = tracks;
  }

  setCurrentTrack(track: Track) {
    this.currentTrack = track;
    this.isPlaying = true;
  }

  toggle() {
    this.isPlaying = !this.isPlaying;
  }
}

export const playerStore = new PlayerStore();
