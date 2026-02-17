'use client';

import s from './Header.module.scss';

import homeSvg from '../../../public/svg/house-chimney.svg';
import FollowingSvg from '../../../public/svg/following.svg';
import TrendingSvg from '../../../public/svg/flame.svg';

import Image from 'next/image';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  return (
    <div className={s.header}>
      <nav className={s.links}>
        <ul>
          <li>
            <Image src={homeSvg} alt="" />
            <span>Home</span>
          </li>
          <li>
            <Image src={FollowingSvg} alt="" />
            <span>Trending</span>
          </li>
          <li>
            <Image src={TrendingSvg} alt="" />
            <span>Following</span>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Header;
