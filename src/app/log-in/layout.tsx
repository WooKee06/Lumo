"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./login.module.scss";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const steps = [
    { path: "/log-in", label: "Log in to your personal account" },
    { path: "/", label: "Enjoy Lumo ✨" },
  ];

  return (
    <div className={styles["register-layout"]}>
      <div className={styles["register-layout__sidebar"]}>
        <div className={styles["register-layout__sidebar--wrapper"]}>
          <span className={styles["register-layout__logo"]}>Lumo</span>
          <h1 className={styles["register-layout__title"]}>
            Get started with Us
          </h1>
          <p className={styles["register-layout__description"]}>
            Complete these easy steps to register your account
          </p>

          <ul className={styles["register-layout__steps"]}>
            {steps.map((step, index) => {
              const isActive = pathname === step.path;
              return (
                <li
                  key={step.path}
                  className={`${styles["register-layout__step"]} ${
                    isActive ? styles["register-layout__step--active"] : ""
                  }`}
                >
                  <span>{index + 1}</span> {step.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles["register-layout__content"]}>{children}</div>
    </div>
  );
}
