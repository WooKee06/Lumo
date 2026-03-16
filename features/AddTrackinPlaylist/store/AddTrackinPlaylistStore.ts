import { GetMusic } from '@/components/trakcs/api/MusicApi';
import Track from '@/shared/ui/Track/Track';
import { makeAutoObservable, runInAction } from 'mobx';

export class AddTrackinPlaylistStore {
  tracks: Track[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async setTracks() {
    try {
      const data = await GetMusic();
      runInAction(() => {
        this.tracks = data;
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export const addTrackinPlaylistStore = new AddTrackinPlaylistStore();
