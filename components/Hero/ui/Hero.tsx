import HeroHead from '@/components/HeroHead/HeroHead';
import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={s.hero}>
      <HeroHead />
      <div className={s.podcast}>
        <div className={s.podcastContent}>
          <section>
            <h2 className={s.title}>How to start podcast</h2>
            <span>40,142 Monthly Listeners</span>
            <button>Follow</button>
          </section>
          <section className={s.user}>
            <div className={s.img}></div>
            <div>
              <h3 className={s.author}>Ken Adam</h3>
              <span>51k Followers</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
