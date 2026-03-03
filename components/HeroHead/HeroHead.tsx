'use client';

import s from './HeroHead.module.scss';
import Image from 'next/image';

import BackSvg from '../../public/svg/majesticons_door-enter-line-1.svg';
import SearchSvg from '../../public/svg/search (2) 1.svg';
import BellSvg from '../../public/svg/bell.svg';
import EnterSvg from '../../public/svg/majesticons_door-enter-line.svg';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';
import { useEffect } from 'react';

const HeroHead = () => {
  const user = false;

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      console.log(data.user);
    }

    loadUser();
  }, []);

  return (
    <div className={s.HeroHead}>
      <button>
        <Image src={BackSvg} alt="" />
      </button>

      <div className={s.HeroHeadSearch}>
        <Image src={SearchSvg} alt="" />
        <input type="text" placeholder="i want to listen...." />
      </div>
      <button>
        <Image src={BellSvg} alt="" />
      </button>
      <div className={s.HeroHeadUserBtn}>
        {user ? (
          <Image src={''} alt="" />
        ) : (
          <Link href={'/Register'}>
            <button>
              <Image src={EnterSvg} alt="" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroHead;
