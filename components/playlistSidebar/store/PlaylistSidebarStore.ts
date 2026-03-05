import { PLaylist } from '@/components/trakcs/api/MusicApi';
import { makeAutoObservable } from 'mobx';

class PlaylistSidebarStore {
  currentPlaylist: PLaylist | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async setPlaylists() {
    const response = await fetch('/api/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'My Playlist',
        image:
          'https://avatars.yandex.net/get-music-content/16485602/b5dd207b.a.24073348-2/m1000x1000',
        author: 'Kamil',
      }),
    });

    console.log(response);
  }

  setCurrentPlaylist(playlist: PLaylist) {
    this.currentPlaylist = playlist;
  }
}

export const playlistSidebarStore = new PlaylistSidebarStore();
