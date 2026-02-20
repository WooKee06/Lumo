'use client';

import React, { useEffect, useRef } from 'react';
import s from './PlaylistSidebar.module.scss';
import Image from 'next/image';
import playSvg from '../../../public/play-circle.svg';
import stopSvg from '../../../public/stop-circle.svg';

import playlistLength from '../../../public/svg/list-music.svg';
import playlistSearch from '../../../public/svg/search.svg';
import playlistAdd from '../../../public/svg/plus.svg';
import { playerStore } from '@/components/trakcs/store/TrackStore';
import { useDebouce } from '@/shared/hooks/useDebounce';
import { observer } from 'mobx-react-lite';

const PlaylistSidebar = observer(() => {
  const isActive = 1 && playerStore.isPlaying;
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
        {playerStore.playlist.map((playlist, id) => (
          <li key={id} className={s.misuc}>
            <div className={s.musicImg}>
              <Image src={playlist.playlistImg} alt="playlistImg" fill />

              <span className={s.SearchPlaySvg}>
                <Image
                  src={playSvg}
                  alt="StopPlayerSvg"
                  className={isActive ? '' : s.active}
                />
                <Image
                  src={stopSvg}
                  alt="StopPlayerSvg"
                  className={isActive ? s.active : ''}
                />
              </span>
            </div>
            <div className={s.musicInfo}>
              <div className={s.musicContent}>
                <h2 className={s.musicTitle}>{playlist.playlistTitle}</h2>
                <small className={s.musicAuthor}>
                  {playlist.playlistTracks.length +
                    ' podcast · by ' +
                    playlist.playlistAuthor}
                </small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PlaylistSidebar;
