"use client";

import React from "react";
import s from "./Header.module.scss";

import Logo from "../../../public/logo.svg";
import Diamond from "../../../public/diamond.svg";
import Search from "../../../public/search.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const CurrentPath = path.slice(1);

  return (
    <div className={s.header}>
      <div className="wrapper">
        <strong className={s.logo}>
          <Image src={Logo} alt="header-logo" />
        </strong>

        <nav className={s.links}>
          <ul>
            <li>
              <Link
                className={`${CurrentPath == "" ? s.active : " "}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${CurrentPath == "exploration" ? s.active : " "}`}
                href="/exploration"
              >
                Exploration
              </Link>
            </li>
            <li>
              <Link
                className={`${CurrentPath == "playlist" ? s.active : " "}`}
                href="/playlist"
              >
                Playlist
              </Link>
            </li>
          </ul>
        </nav>

        <div className={s.userSection}>
          <div className={s.search}>
            <Image src={Search} alt="diamond" />
          </div>
          <div className={s.subscription}>
            <Image src={Diamond} alt="diamond" />
          </div>
          <div className={s.user}>
            <span>SK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
