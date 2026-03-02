import HeroHead from '@/components/HeroHead/HeroHead';
import React from 'react';
import s from './Hero.module.scss';
import HeroPlayer from '@/components/HeroPlayer/ui/HeroPlayer';
import Link from 'next/link';

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
          <Link target="_blank" href={'https://github.com/WooKee06'}>
            <section className={s.user}>
              <div
                className={s.img}
                style={{
                  backgroundImage: `url(https://avatars.githubusercontent.com/u/144827180?v=4)`,
                }}
              ></div>
              <div>
                <h3 className={s.author}>Wookee</h3>
                <span>51k Followers</span>
              </div>
            </section>
          </Link>
        </div>
      </div>
      <HeroPlayer />
    </div>
  );
};

export default Hero;
