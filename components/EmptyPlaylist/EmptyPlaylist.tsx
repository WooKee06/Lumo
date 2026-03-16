'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import s from './EmptyPlaylist.module.scss';
import AddTrackinPlaylist from '@/features/AddTrackinPlaylist/ui/AddTrackinPlaylist';

const eyesAnimation = {
  animate: {
    x: [0, 0, 15, 0, -12, 0, 0],
    y: [0, 0, -2, -3, -1, 0, 0],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

export default function EmptyPlaylist() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <span>Плейлист пустой (( </span>

      <button onClick={() => setIsModalOpen(true)}>Добавить трек</button>

      <AddTrackinPlaylist
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
