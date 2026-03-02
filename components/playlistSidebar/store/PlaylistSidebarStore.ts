import { PLaylist } from '@/components/trakcs/api/MusicApi';
import { makeAutoObservable } from 'mobx';

class PlaylistSidebarStore {
  currentPlaylist: PLaylist | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPlaylist(playlist: PLaylist) {
    this.currentPlaylist = playlist;
  }
}

export const playlistSidebarStore = new PlaylistSidebarStore();
