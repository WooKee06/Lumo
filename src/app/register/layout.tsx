"use client";

import React from "react";
import styles from "./register.module.scss";
import RegistrationSidebar from "@/widgets/RegistrationSidebar/ui/RegistrationSidebar";
import { AuthSideBar } from "@/features/authSidebar/ui/AuthSidebar";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps = [
    { path: "/register", label: "Enter your email" },
    { path: "/register/profile", label: "Setting up a profile" },
    { path: "/register/privacy", label: "Privacy Settings" },
  ];

  return (
    <div className={styles["register-layout"]}>
      <div className={styles["register-layout__sidebar"]}>
        <div className={styles["register-layout__sidebar--wrapper"]}>
          <AuthSideBar />
          <RegistrationSidebar steps={steps} />
        </div>
      </div>
      <div className={styles["register-layout__content"]}>{children}</div>
    </div>
  );
}
