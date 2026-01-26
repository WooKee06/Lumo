import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  isPlaying: boolean = false;
  CurrentTrack: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  play(track: string) {
    this.CurrentTrack = track;
    this.isPlaying = true;
    console.log(`Playing track: ${track}`);
  }
}

export const musicPlayerStore = new MusicPlayerStore();
