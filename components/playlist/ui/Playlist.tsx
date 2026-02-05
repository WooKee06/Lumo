'use client';

import s from './Playlist.module.scss';
import Image from 'next/image';

import playSvg from '../../../public/play-circle.svg';
import stopSvg from '../../../public/stop-circle.svg';
import { useEffect, useRef, useState } from 'react';
import { GetMusic, Track } from '../api/MusicApi';
import { playerStore } from '../store/TrackStore';
import { observer } from 'mobx-react-lite';
import { tr } from 'framer-motion/client';

const Playlist = observer(() => {
  const [tracks, setTracks] = useState<Track[]>([]);

  const handleClickTrack = (track: Track) => {
    const isSameTrack = playerStore.currentTrack?.id === track.id;

    if (isSameTrack) {
      playerStore.setPlaying(!playerStore.isPlaying);
    } else {
      playerStore.setCurrentTrack(track);
      playerStore.setPlaying(true);
    }
  };

  useEffect(() => {
    const GetTracks = async () => {
      const response = await GetMusic();
      setTracks(response);
    };

    GetTracks();
  }, []);

  console.log(playerStore.isPlaying);

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
              <Image src={track.imgPreview} alt="playlistImg" fill />

              <span className={s.SearchPlaySvg}>
                <Image
                  src={playSvg}
                  alt="StopPlayerSvg"
                  className={
                    playerStore.currentTrack?.id == track.id &&
                    playerStore.isPlaying
                      ? ''
                      : s.active
                  }
                />
                <Image
                  src={stopSvg}
                  alt="StopPlayerSvg"
                  className={
                    playerStore.currentTrack?.id == track.id &&
                    playerStore.isPlaying
                      ? s.active
                      : ''
                  }
                />
              </span>
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
