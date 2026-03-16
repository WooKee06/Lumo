'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './AddTrackinPlaylist.module.scss';
import { addTrackinPlaylistStore } from '../store/AddTrackinPlaylistStore';
import { observer } from 'mobx-react-lite';
import { playlistSidebarStore } from '@/components/playlistSidebar/store/PlaylistSidebarStore';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddTrackinPlaylist = observer(({ isOpen, onClose }: Props) => {
  const playlistId = playlistSidebarStore.currentPlaylist?.id;

  const handleAddToPlaylist = async (trackId: number) => {
    if (!playlistId) {
      console.error('No playlist selected');
      return;
    }

    const res = await fetch(`/api/playlist/${playlistId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackId: Number(trackId) }),
    });

    const data = await res.json();
    console.log('Server response:', data);
  };

  useEffect(() => {
    if (isOpen) {
      addTrackinPlaylistStore.setTracks();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={s.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={s.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={s.modalContent}>
              <div className={s.modalHeader}>
                <h2 className={s.modalTitle}>Добавить трек в плейлист</h2>
                <button
                  className={s.closeButton}
                  onClick={onClose}
                  aria-label="Закрыть"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className={s.tracksList}>
                {addTrackinPlaylistStore.tracks.map((track, index) => (
                  <motion.div
                    key={track.id}
                    className={s.trackItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, backgroundColor: '#333' }}
                  >
                    <img
                      src={track.img_preview || '/default-cover.jpg'}
                      alt={track.title}
                      className={s.trackCover}
                    />

                    <div className={s.trackInfo}>
                      <div className={s.trackTitle}>{track.title}</div>
                      <div className={s.trackArtist}>{track.artist}</div>
                    </div>

                    <motion.button
                      className={s.addButton}
                      onClick={() => handleAddToPlaylist(track.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          fill="white"
                          fillOpacity="0.25"
                        />
                        <path
                          d="M12 8V16M16 12H8"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default AddTrackinPlaylist;
