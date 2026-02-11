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

  get activeTrackId() {
    return this.currentTrack?.id ?? null;
  }

  setTrack(track: Track) {
    this.duration = 0;
    this.isPlaying = true;
    this.currentTime = 0;
  }

  toggleTrack(track: Track) {
    const isSame = this.currentTrack?.id === track.id;

    if (isSame) {
      this.isPlaying = !this.isPlaying;
    } else {
      this.currentTrack = track;
      this.isPlaying = true;
    }
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
