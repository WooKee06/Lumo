'use client';

import { useState } from 'react';
import s from './ModalAddPlaylist.module.scss';

type ModalAddPlaylistProps = {
  isOpen: boolean;
};

const ModalAddPlaylist = ({ isOpen }: ModalAddPlaylistProps) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', file);

    const res = await fetch('/api/playlist', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.wrapper}>
            <h3>Новый плейлист</h3>

            <form onSubmit={handleSubmit}>
              <div className={s.input}>
                <input
                  type="text"
                  placeholder="Название плейлиста"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                <button type="submit">Создать</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAddPlaylist;
