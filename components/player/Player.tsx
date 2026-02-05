'use client';

import React, { useEffect, useRef } from 'react';
import s from './Player.module.scss';

import playPlayerSvg from '../../public/playSvg.svg';
import pausePlayerSvg from '../../public/stopSvg.svg';
import prevPlayerSvg from '../../public/prevSvg.svg';
import nextPlayerSvg from '../../public/nextSvg.svg';
import Image from 'next/image';
import { playerStore } from '../playlist/store/TrackStore';
import { observer } from 'mobx-react-lite';

const Player = observer(() => {
  const track = playerStore.currentTrack;
  const audioRef = useRef<HTMLAudioElement>(null);

  const format = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')} `;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetaData = () => {
      playerStore.setDuration(audio.duration);
    };

    const onTimeUpdate = () => {
      playerStore.setCurrentTime(audio.currentTime);
    };

    const onPlay = () => playerStore.setPlaying(true);
    const onPause = () => playerStore.setPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetaData);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetaData);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playerStore.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playerStore.isPlaying]);

  const percent =
    playerStore.duration > 0
      ? (playerStore.currentTime / playerStore.duration) * 100
      : 0;

  if (!playerStore.currentTrack) return null;

  return (
    <div className={s.player}>
      <div className={s.playerHead}>
        <h2 className={s.trackAutor}>{track?.artist}</h2>

        <section className={s.trackInfo}>
          <div>
            <small>Listners</small> <span> {track?.listners}</span>
          </div>
          <div>
            <small>Likes</small> <span> {track?.likes}</span>
          </div>
        </section>
      </div>

      <div className={s.playerContent}>
        <div></div>
        {/* <div className={s.playerSound}>
          <input type="range" />
          <Image src={PlayerSoundSvg} alt="" />
        </div> */}
      </div>

      <div className={s.playerFooter}>
        <div className={s.trackDuration}>
          <span style={{ width: `${percent}%` }}></span>
          <audio ref={audioRef} src={playerStore.currentTrack.src}></audio>
        </div>
        <div className={s.playerFooterContent}>
          <h2 className={s.traclkTitle}>
            <small>Track</small>
            {track?.title}
          </h2>

          <div className={s.trackAction}>
            <button>
              <Image src={prevPlayerSvg} alt="StopPlayerSvg" />
            </button>

            <button
              className={s.trackState}
              onClick={() => playerStore.setPlaying(!playerStore.isPlaying)}
            >
              <div>
                <Image
                  src={playPlayerSvg}
                  alt="StopPlayerSvg"
                  className={playerStore.isPlaying ? '' : s.active}
                />
                <Image
                  src={pausePlayerSvg}
                  alt="StopPlayerSvg"
                  className={playerStore.isPlaying ? s.active : ''}
                />
              </div>
            </button>
            <button>
              <Image src={nextPlayerSvg} alt="StopPlayerSvg" />
            </button>
          </div>

          <h3 className={s.trackLenght}>
            {format(playerStore.currentTime)}
            <span>/ {format(playerStore.duration)} </span>
          </h3>
        </div>
      </div>
    </div>
  );
});

export default Player;
