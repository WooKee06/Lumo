import { makeAutoObservable } from "mobx";
import { Track } from "../api/MusicApi";

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

  nextTrack() {
    const currentIndex = this.tracks.findIndex(
      (t) => t.id === this.currentTrack?.id,
    );
    if (currentIndex < this.tracks.length - 1) {
      this.setCurrentTrack(this.tracks[currentIndex + 1]);
    } else {
      this.setCurrentTrack(this.tracks[0]);
    }
  }

  prevTrack() {
    const currentIndex = this.tracks.findIndex(
      (t) => t.id === this.currentTrack?.id,
    );
    if (currentIndex > 0) {
      this.setCurrentTrack(this.tracks[currentIndex - 1]);
    } else {
      this.setCurrentTrack(this.tracks[this.tracks.length - 1]);
    }
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
