'use client';
import { IoIosClose } from 'react-icons/io';
import s from './Input.module.scss';
import Search from '../../../public/search.svg';
import Image from 'next/image';
import { useState } from 'react';
import { playerStore } from '@/components/trakcs/store/TrackStore';

const Input = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={s.input}>
      <div>
        <Image src={Search} width={20} height={20} alt="search svg icon" />
        <input
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            setValue(newValue);
            playerStore.setSearchValue(newValue);
          }}
          type="text"
          placeholder="Search music"
        />
      </div>

      <button className={value.trim() !== '' ? s.active : ''}>
        <IoIosClose size={25} color="#fff" />
      </button>
    </div>
  );
};

export default Input;
