import React from 'react';
import s from './HeroPlayer.module.scss';
import Tracks from '@/components/trakcs/ui/Tracks';
import playPlayerSvg from '../../../public/play-circle.svg';
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
          <section>
            <button>
              <Image src={playPlayerSvg} alt="" />
            </button>
            <span>
              Creator business <br /> advice for podcast
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroPlayer;
