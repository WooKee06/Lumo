'use client';

import s from './Tracks.module.scss';

import { useEffect } from 'react';
import { playerStore } from '../store/TrackStore';

import Track from '@/shared/ui/Track/Track';
import { observer } from 'mobx-react-lite';
import { useDebouce } from '@/shared/hooks/useDebounce';

const Tracks = observer(() => {
  const debouncedValue = useDebouce(playerStore.searchValue, 300);

  useEffect(() => {
    playerStore.searchTracks(debouncedValue);
  }, [debouncedValue]);

  console.log(playerStore.tracks);

  return (
    <div className={s.playlist}>
      {playerStore.loading && <p>Loading...</p>}

      <ul>
        {playerStore.tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
});

export default Tracks;
