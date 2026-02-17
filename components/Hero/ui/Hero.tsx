import HeroHead from '@/components/HeroHead/HeroHead';
import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={s.hero}>
      <HeroHead />
    </div>
  );
};

export default Hero;
