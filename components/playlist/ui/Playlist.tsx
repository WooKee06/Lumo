'use client';

import s from './Playlist.module.scss';

import { useEffect } from 'react';
import { GetMusic } from '../api/MusicApi';
import { playerStore } from '../store/TrackStore';

import Track from '@/shared/ui/Track/Track';
import { observer } from 'mobx-react-lite';

const Playlist = observer(() => {
  useEffect(() => {
    const GetTracks = async () => {
      const response = await GetMusic();
      playerStore.setTracks(response);
    };

    GetTracks();
  }, []);

  return (
    <div className={s.playlist}>
      <ul>
        {playerStore.tracks?.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
});

export default Playlist;
