import Image from 'next/image';
import playSvg from '../../../public/play-circle.svg';
import stopSvg from '../../../public/stop-circle.svg';
import s from './Track.module.scss';
import { playerStore } from '@/components/trakcs/store/TrackStore';
import { observer } from 'mobx-react-lite';

type TrackProps = {
  track: Track;
};

interface Track {
  id: number;
  title: string;
  artist: string;
  likes: string;
  src: string;
  imgPreview: string;
  listners: string;
}

const Track = observer(({ track }: TrackProps) => {
  const isActive = 0 === track.id && playerStore.isPlaying;

  const TrackTitle = track.title.slice(0, 20) + '...';

  return (
    <li onClick={() => playerStore.toggleTrack(track)} className={s.misuc}>
      <div className={s.musicImg}>
        <Image src={track.imgPreview} alt="playlistImg" fill />

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
          <h2 className={s.musicTitle}>{TrackTitle}</h2>
          <small className={s.musicAuthor}>{track.artist}</small>
        </div>

        <span>How to Start Podcast</span>
        <span>2,412</span>
        <span>08:12</span>
      </div>
    </li>
  );
});

export default Track;
