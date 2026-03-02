'use client';

import React, { useEffect, useRef } from 'react';
import s from './PlaylistSidebar.module.scss';
import Image from 'next/image';

import playlistLength from '../../../public/svg/list-music.svg';
import playlistSearch from '../../../public/svg/search.svg';
import playlistAdd from '../../../public/svg/plus.svg';
import { playerStore } from '@/components/trakcs/store/TrackStore';
import { useDebouce } from '@/shared/hooks/useDebounce';
import { observer } from 'mobx-react-lite';
import PlaylistItem from '@/shared/ui/PlaylistItem/PlaylistItem';

const PlaylistSidebar = observer(() => {
  const debouncedValue = useDebouce(playerStore.searchValue, 300);

  useEffect(() => {
    playerStore.searchPlaylist(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={s.PlaylistSidebar}>
      <div className={s.PlaylistHeader}>
        <div className={s.playlistLength}>
          <Image src={playlistLength} alt="" />
          <span>Your playlist (9)</span>
        </div>

        <div className={s.playlsitAction}>
          <button>
            <Image src={playlistSearch} alt="" />
          </button>
          <button>
            <Image src={playlistAdd} alt="" />
          </button>
        </div>
      </div>

      <ul>
        {playerStore.playlist.map((playlist) => (
          <PlaylistItem playlist={playlist} key={playlist.id} />
        ))}
      </ul>
    </div>
  );
});

export default PlaylistSidebar;
