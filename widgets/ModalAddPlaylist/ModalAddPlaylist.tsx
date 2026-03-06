'use client';

import { useState } from 'react';
import s from './ModalAddPlaylist.module.scss';
import { playlistSidebarStore } from '@/components/playlistSidebar/store/PlaylistSidebarStore';
import { motion } from 'framer-motion';

type ModalAddPlaylistProps = {
  isOpen: boolean;
  onCLose: () => void;
};

const ModalAddPlaylist = ({ isOpen, onCLose }: ModalAddPlaylistProps) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', file);

    playlistSidebarStore.setPlaylists(formData);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className={s.modal}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className={s.wrapper}>
            <h3>Новый плейлист</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Название плейлиста"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className={s.preview}>
                {preview ? <img src={preview} width={120} /> : <div></div>}

                <label htmlFor="file-upload" className={s.customFileUpload}>
                  Загрузить изображение
                </label>
              </div>
              <input
                type="file"
                id="file-upload"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (!file) return;
                  setFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
                accept="image/*"
              />

              <button className={s.cansel} onClick={onCLose}>
                Отмена
              </button>
              <button type="submit">Создать</button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModalAddPlaylist;
