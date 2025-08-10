"use client";

import React from "react";
import styles from "./register.module.scss";
import RegistrationSidebar from "@/widgets/RegistrationSidebar/ui/RegistrationSidebar";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["register-layout"]}>
      <RegistrationSidebar />
      <div className={styles["register-layout__content"]}>{children}</div>
    </div>
  );
}
