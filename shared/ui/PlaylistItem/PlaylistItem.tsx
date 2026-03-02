import s from './PlaylistItem.module.scss';
import Image from 'next/image';
import playSvg from '../../../public/play-circle.svg';
import stopSvg from '../../../public/stop-circle.svg';
import { playlistSidebarStore } from '@/components/playlistSidebar/store/PlaylistSidebarStore';
import { PLaylist } from '@/components/trakcs/api/MusicApi';
import { playerStore } from '@/components/trakcs/store/TrackStore';
import { observer } from 'mobx-react-lite';

interface PlaylistItemProp {
  playlist: PLaylist;
}

const PlaylistItem = observer(({ playlist }: PlaylistItemProp) => {
  const isActive = playlist.id === playerStore.currentTrack?.playlist_id;
  const HandleCurrentPlaylsit = (playlist: PLaylist) => {
    playlistSidebarStore.setCurrentPlaylist(playlist);
  };

  return (
    <li onClick={() => HandleCurrentPlaylsit(playlist)} className={s.misuc}>
      <div className={s.musicImg}>
        <Image src={playlist.image} alt="playlistImg" fill />

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
          <h2 className={s.musicTitle}>{playlist.title}</h2>
          <small className={s.musicAuthor}>
            {playlist.tracks?.length + ' podcast · by ' + playlist.author}
          </small>
        </div>
      </div>
    </li>
  );
});

export default PlaylistItem;
