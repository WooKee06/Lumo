import s from "./Header.module.scss";

import Logo from "../../../public/logo.svg";

import Image from "next/image";

const Header = () => {
  return (
    <div className={s.header}>
      <strong className={s.logo}>
        <Image src={Logo} alt="header-logo" />
      </strong>

      <div className={s.userSection}>
        <div className={s.user}>
          <span>SK</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
