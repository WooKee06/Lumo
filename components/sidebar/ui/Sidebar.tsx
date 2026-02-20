'use client';
import s from './Sidebar.module.scss';
import Header from '@/components/Header/ui/Header';
import Playlist from '@/components/trakcs/ui/Tracks';
import PlaylistSidebar from '@/components/playlistSidebar/ui/PlaylistSidebar';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <Header />
        <PlaylistSidebar />
        {/* <Playlist /> */}
      </div>
    </div>
  );
};

export default Sidebar;
