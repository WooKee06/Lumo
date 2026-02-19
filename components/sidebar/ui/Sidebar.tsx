'use client';
import s from './Sidebar.module.scss';
import Header from '@/components/Header/ui/Header';
import Playlist from '@/components/trakcs/ui/Tracks';
import PlaylistHeader from '@/components/playlistHeader/ui/PlaylistHeader';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <Header />
        <PlaylistHeader />
        {/* <Playlist /> */}
      </div>
    </div>
  );
};

export default Sidebar;
