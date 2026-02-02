import React from 'react';
import s from './Player.module.scss';

import StopPlayerSvg from '../../public/stopSvg.svg';
import prevPlayerSvg from '../../public/prevSvg.svg';
import nextPlayerSvg from '../../public/nextSvg.svg';
import PlayerSoundSvg from '../../public/sound.svg';
import Image from 'next/image';

const Player = () => {
  return (
    <div className={s.player}>
      <div className={s.playerHead}>
        <h2 className={s.trackAutor}>Sublah & Azaleh</h2>

        <section className={s.trackInfo}>
          <div>
            <small>Listners</small> <span>40k</span>
          </div>
          <div>
            <small>Likes</small> <span>1.3k</span>
          </div>
          <div>
            <small>Albums</small> <span>128</span>
          </div>
        </section>
      </div>

      <div className={s.playerContent}>
        <div></div>
        {/* <div className={s.playerSound}>
          <input type="range" />
          <Image src={PlayerSoundSvg} alt="" />
        </div> */}
      </div>

      <div className={s.playerFooter}>
        <h2 className={s.traclkTitle}>
          <small>Track</small>
          Sublah & Azaleh
        </h2>

        <div className={s.trackAction}>
          <button>
            <Image src={prevPlayerSvg} alt="StopPlayerSvg" />
          </button>
          <button>
            <Image src={StopPlayerSvg} alt="StopPlayerSvg" />
          </button>
          <button>
            <Image src={nextPlayerSvg} alt="StopPlayerSvg" />
          </button>
        </div>

        <h3 className={s.trackLenght}>
          1:52 <span>/ 3:42</span>
        </h3>
      </div>
    </div>
  );
};

export default Player;
