'use client';

import s from './Playlist.module.scss';
import Image from 'next/image';

import playSvg from '../../../public/play-circle.svg';
import stopSvg from '../../../public/stop-circle.svg';
import { useEffect, useRef, useState } from 'react';
import { GetMusic, Track } from '../api/MusicApi';
import { playerStore } from '../store/TrackStore';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';

const Playlist = observer(() => {
  const [tracks, setTracks] = useState<Track[]>([]);

  const handleClickTrack = (track: Track) => {
    if (!track) return;
    playerStore.setCurrentTrack(track);
    playerStore.setPlaying(!playerStore.isPlaying);
  };

  useEffect(() => {
    const GetTracks = async () => {
      const response = await GetMusic();
      setTracks(response);
    };

    GetTracks();
  }, []);

  return (
    <div className={s.playlist}>
      <ul>
        {tracks?.map((track) => (
          <li
            onClick={() => handleClickTrack(track)}
            key={track.id}
            className={s.misuc}
          >
            <div className={s.musicImg}>
              <Image
                src="https://sun9-14.userapi.com/impg/Gt63kBGx7e-Oa_LM8AzNctas-M_sTXS-gbhqyQ/wRYrdXA1fP8.jpg?size=270x270&quality=96&sign=41921ff00f48cab1c3a76532c1380b41&c_uniq_tag=HCHqPj3-XCp6aFnwNnBVNUkUvAeFPFXXVODKqUAr7S4&type=audio"
                alt="playlistImg"
                fill
              />

              <span className={s.SearchPlaySvg}>
                <Image
                  src={playSvg}
                  alt="SearchPlaySvg"
                  className={
                    playerStore.isPlaying == true ? 'active' : s.playSvg
                  }
                />
                {/* <Image
                  src={stopSvg}
                  alt="SearchPlaySvg"
                  className={
                    playerStore.isPlaying == true ? 'active' : s.stopSvg
                  }
                /> */}
              </span>
              <small>4:07 </small>
            </div>
            <div className={s.musicContent}>
              <h2 className={s.musicTitle}>{track.title}</h2>
              <small className={s.musicAuthor}>{track.artist}</small>

              <span className={s.musicLength}>56 Tracks ~ 1:35:42</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Playlist;
