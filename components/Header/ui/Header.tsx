"use client";

import s from "./Header.module.scss";

import Logo from "../../../public/logo.svg";
import UserImg from "../../../public/userImg.jpg";

import Image from "next/image";
import { musicPlayerStore } from "@/store/store";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  return (
    <div className={s.header}>
      <strong className={s.logo}>
        <Image src={Logo} alt="header-logo" />
      </strong>

      <div className={s.user}>
        <Image
          alt="userImage"
          src={UserImg}
          onClick={() => musicPlayerStore.play("track 1")}
        />
      </div>
    </div>
  );
});

export default Header;
