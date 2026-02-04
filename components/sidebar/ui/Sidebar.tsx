'use client';
import s from './Sidebar.module.scss';
import Header from '@/components/Header/ui/Header';
import Input from '@/shared/ui/Input/Input';
import Playlist from '@/components/playlist/ui/Playlist';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <Header />
        <Input />
        <Playlist />
      </div>
    </div>
  );
};

export default Sidebar;
