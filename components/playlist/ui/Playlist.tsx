import s from './Playlist.module.scss';
import Image from 'next/image';

import SearchPlaySvg from '../../../public/play-circle.svg';

const Playlist = () => {
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
      </ul>
    </div>
  );
};

export default Playlist;
