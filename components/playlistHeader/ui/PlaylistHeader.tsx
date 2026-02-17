import React from 'react';
import s from './PlaylistHeader.module.scss';
import Image from 'next/image';

import playlistLength from '../../../public/svg/list-music.svg';
import playlistSearch from '../../../public/svg/search.svg';
import playlistAdd from '../../../public/svg/plus.svg';

const PlaylistHeader = () => {
  return (
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
  );
};

export default PlaylistHeader;
