import React from "react";
import s from "./Sidebar.module.scss";
import Header from "@/widgets/Header/ui/Header";
import Input from "@/shared/ui/Input/Input";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <Header />
        <Input />
      </div>
    </div>
  );
};

export default Sidebar;
