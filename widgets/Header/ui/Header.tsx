import s from "./Header.module.scss";

import Logo from "../../../public/logo.svg";
import UserImg from "../../../public/userImg.jpg";

import Image from "next/image";

const Header = () => {
  return (
    <div className={s.header}>
      <strong className={s.logo}>
        <Image src={Logo} alt="header-logo" />
      </strong>

      <div className={s.user}>
        <Image alt="userImage" src={UserImg} />
      </div>
    </div>
  );
};

export default Header;
