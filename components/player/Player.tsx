'use client';

import React, { useEffect, useRef } from 'react';
import s from './Player.module.scss';

import playPlayerSvg from '../../public/playSvg.svg';
import pausePlayerSvg from '../../public/stopSvg.svg';
import Volume from '../../public/svg/volume.svg';
import prevPlayerSvg from '../../public/prevSvg.svg';
import nextPlayerSvg from '../../public/nextSvg.svg';
import Image from 'next/image';
import { playerStore } from '../trakcs/store/TrackStore';
import { observer } from 'mobx-react-lite';

const Player = observer(() => {
  const track = playerStore.currentTrack;
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

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
    const onEnded = () => {
      playerStore.setPlaying(false);
      playerStore.setCurrentTime(0);
      playerStore.nextTrack();
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetaData);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetaData);
      audio.removeEventListener('ended', onEnded);
    };
  }, [track]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playerStore.isPlaying) {
      audioRef.current.play().catch((e) => console.log('Playback failed:', e));
    } else {
      audioRef.current.pause();
    }
  }, [playerStore.isPlaying]);

  useEffect(() => {
    if (audioRef.current && playerStore.currentTrack) {
      audioRef.current.src = playerStore.currentTrack.src;
      if (playerStore.isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log('Playback failed:', e));
      }
    }

    if (audioRef.current) {
      if (
        playerStore.isPlaying &&
        playerStore.currentTime == playerStore.duration
      ) {
        audioRef.current.play();
      }
    }
  }, [playerStore.currentTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = playerStore.volume;
  }, [playerStore.volume]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const audio = audioRef.current;

    if (!bar || !audio || !playerStore.duration) return;

    const rect = bar.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const percent = clickX / width;
    const newTime = percent * playerStore.duration;

    audio.currentTime = newTime;
    playerStore.setCurrentTime(newTime);
  };

  const percent =
    playerStore.duration > 0
      ? (playerStore.currentTime / playerStore.duration) * 100
      : 0;

  if (!playerStore.currentTrack) return null;

  return (
    <div className={s.player}>
      <audio ref={audioRef} />

      <div className={s.playerContent}>
        <div></div>
      </div>

      <div className={s.playerFooter}>
        <div className={s.playerFooterContent}>
          <div className={s.playerHead}>
            <div className={s.trackImg}>
              <Image
                src={track?.img_preview ?? ''}
                alt={track?.title ?? 'cover'}
                fill
              />
            </div>
            <h2 className={s.traclkTitle}>
              {track?.title.slice(0, 25) + '...'}
              <small>{track?.artist}</small>
            </h2>
          </div>

          <div className={s.trackAction}>
            <button onClick={() => playerStore.prevTrack()}>
              <Image src={prevPlayerSvg} alt="Prev" />
            </button>

            <button
              className={s.trackState}
              onClick={() => playerStore.setPlaying(!playerStore.isPlaying)}
            >
              <div>
                <Image
                  src={playPlayerSvg}
                  alt="Play"
                  className={playerStore.isPlaying ? '' : s.active}
                />
                <Image
                  src={pausePlayerSvg}
                  alt="Pause"
                  className={playerStore.isPlaying ? s.active : ''}
                />
              </div>
            </button>

            <button onClick={() => playerStore.nextTrack()}>
              <Image src={nextPlayerSvg} alt="Next" />
            </button>
          </div>

          <div className={s.trackDurationWrapper}>
            <small>{format(playerStore.currentTime)}</small>
            <div
              className={s.trackDuration}
              ref={progressRef}
              onClick={handleSeek}
            >
              <span style={{ width: `${percent}%` }}></span>
            </div>
            <small>{format(playerStore.duration)} </small>
          </div>

          <div className={s.Volume}>
            <Image src={Volume} alt="Volume" />
            <input
              type="range"
              min="0"
              max="100"
              className={s.volumeRange}
              value={playerStore.volume * 100}
              onChange={(e) =>
                playerStore.setVolume(Number(e.target.value) / 100)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Player;
