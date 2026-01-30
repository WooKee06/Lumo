'use client';

import React, { useEffect, useState } from 'react';
import s from './Playlist.module.scss';
import Image from 'next/image';
import { Track } from '../types/MusicApiTypes';
import { GetMusic } from '../api/MusicApi';

import SearchPlaySvg from '../../../public/play-circle.svg';

const Playlist = () => {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const data = await GetMusic();
  //       console.log(data);
  //       setPlaylist(data);
  //     } catch (err) {
  //       console.error("Ошибка загрузки песен:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div className={s.playlist}>
      <ul>
        <li className={s.misuc}>
          <div className={s.musicImg}>
            <Image
              src="https://sun9-14.userapi.com/impg/Gt63kBGx7e-Oa_LM8AzNctas-M_sTXS-gbhqyQ/wRYrdXA1fP8.jpg?size=270x270&quality=96&sign=41921ff00f48cab1c3a76532c1380b41&c_uniq_tag=HCHqPj3-XCp6aFnwNnBVNUkUvAeFPFXXVODKqUAr7S4&type=audio"
              alt="playlistImg"
              fill
            />

            <span className={s.SearchPlaySvg}>
              <Image src={SearchPlaySvg} alt="SearchPlaySvg" />
            </span>
            <small>4:07</small>
          </div>
          <div className={s.musicContent}>
            <h2 className={s.musicTitle}>Nostalgic</h2>
            <small className={s.musicAuthor}>Wookee</small>

            <span className={s.musicLength}>56 Tracks ~ 1:35:42</span>
          </div>
        </li>

        {playlist?.map((track) => (
          <li key={track.id} className={s.misuc}>
            <div className={s.musicImg}>
              <Image
                src={`https://e-cdns-images.dzcdn.net/images/cover/${track.md5_image}/250x250.jpg`}
                alt="playlistImg"
                fill
              />
            </div>
            <div className={s.musicContent}>
              <h2 className={s.musicTitle}>{track.title}</h2>
              <small className={s.musicAuthor}>{track.title_short}</small>

              <span className={s.musicLength}>Single ~ {track.duration}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
