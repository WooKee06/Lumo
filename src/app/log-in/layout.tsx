"use client";

import React from "react";
import styles from "./login.module.scss";
import { AuthSideBar } from "@/features/authSidebar/ui/AuthSidebar";
import RegistrationSidebar from "@/widgets/RegistrationSidebar/ui/RegistrationSidebar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps = [
    { path: "/log-in", label: "Log in to your personal account" },
    { path: "/", label: "Enjoy Lumo ✨" },
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
