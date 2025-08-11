import * as React from "react";

import styles from "./AuthSidebar.module.scss";

export interface IAuthSideBarProps {}

export function AuthSideBar(props: IAuthSideBarProps) {
  return (
    <>
      <span className={styles["logo"]}>Lumo</span>
      <h1 className={styles["title"]}>Get started with Us</h1>
      <p className={styles["description"]}>
        Complete these easy steps to register your account
      </p>
    </>
  );
}
