'use client';

import s from './Tracks.module.scss';

import { useEffect } from 'react';
import { playerStore } from '../store/TrackStore';

import Track from '@/shared/ui/Track/Track';
import { observer } from 'mobx-react-lite';
import { useDebouce } from '@/shared/hooks/useDebounce';
import { playlistSidebarStore } from '@/components/playlistSidebar/store/PlaylistSidebarStore';

const Tracks = observer(() => {
  const debouncedValue = useDebouce(playerStore.searchValue, 300);

  useEffect(() => {
    playerStore.searchTracks(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={s.playlist}>
      {playerStore.loading && <p>Loading...</p>}

      <ul>
        {playlistSidebarStore.currentPlaylist?.tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
});

export default Tracks;
