import { PLaylist } from '@/components/trakcs/api/MusicApi';
import { makeAutoObservable } from 'mobx';

class PlaylistSidebarStore {
  currentPlaylist: PLaylist | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async setPlaylists(formData: FormData) {
    const response = await fetch('/api/playlist', {
      method: 'POST',

      body: formData,
    });

    console.log(response);
  }

  setCurrentPlaylist(playlist: PLaylist) {
    this.currentPlaylist = playlist;
  }
}

export const playlistSidebarStore = new PlaylistSidebarStore();
