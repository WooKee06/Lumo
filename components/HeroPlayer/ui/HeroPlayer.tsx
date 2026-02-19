import React from 'react';
import s from './HeroPlayer.module.scss';
import Tracks from '@/components/trakcs/ui/Tracks';
import Image from 'next/image';

const HeroPlayer = () => {
  return (
    <div className={s.HeroPlayer}>
      <div className={s.tracksTabe}>
        <Tracks />
      </div>
      <div className={s.tracksFeatured}>
        <h3>Featured by creator</h3>
        <div className={s.FeaturedCard}>
          <button>
            <Image src={''} alt="" />
          </button>
          <span>
            Creator business <br /> advice for podcast
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroPlayer;
