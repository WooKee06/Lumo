import React from 'react'
import s from './Header.module.scss'

import Logo from "../../../public/logo.svg"
import Diamond from "../../../public/diamond.svg"
import Search from "../../../public/search.svg"


import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={s.header}>
      <div className='wrapper'>
        <strong className={s.logo}>
          <Image src={Logo} alt="header-logo" />
        </strong>

        <nav className={s.links}>
          <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">Exploration</Link></li>
            <li><Link href="">Playlist</Link></li>
          </ul>
        </nav>




        <div className={s.userSection}>
          <div className={s.search}>
            <Image src={Search} alt='diamond'/>
          </div>
          <div className={s.subscription}>
            <Image src={Diamond} alt='diamond'/>
          </div>
          <div className={s.user}>SK</div>
        </div>
      </div>
    </div>
  )
}

export default Header
