'use client';

import React, { useEffect, useRef, useState } from 'react';
import s from './PlaylistSidebar.module.scss';
import Image from 'next/image';

import playlistLength from '../../../public/svg/list-music.svg';
import playlistSearch from '../../../public/svg/search.svg';
import playlistAdd from '../../../public/svg/plus.svg';
import { playerStore } from '@/components/trakcs/store/TrackStore';
import { useDebouce } from '@/shared/hooks/useDebounce';
import { observer } from 'mobx-react-lite';
import PlaylistItem from '@/shared/ui/PlaylistItem/PlaylistItem';
import { playlistSidebarStore } from '../store/PlaylistSidebarStore';
import ModalAddPlaylist from '@/widgets/ModalAddPlaylist/ModalAddPlaylist';

const PlaylistSidebar = observer(() => {
  const debouncedValue = useDebouce(playerStore.searchValue, 300);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    playerStore.searchPlaylist(debouncedValue);
  }, [debouncedValue]);

  const CloseModalHandler = () => {
    setIsOpen(false);
  };

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
          <button onClick={() => setIsOpen(true)}>
            <Image src={playlistAdd} alt="" />
          </button>
        </div>
      </div>

      <ul>
        {playerStore.playlist.map((playlist) => (
          <PlaylistItem playlist={playlist} key={playlist.id} />
        ))}
      </ul>

      <ModalAddPlaylist onCLose={CloseModalHandler} isOpen={isOpen} />
    </div>
  );
});

export default PlaylistSidebar;
