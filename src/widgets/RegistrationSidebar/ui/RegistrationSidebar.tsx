import React from "react";
import styles from "./RegistrationSidebar.module.scss";
import { usePathname } from "next/navigation";

const RegistrationSidebar = () => {
  const pathname = usePathname();

  const steps = [
    { path: "/register", label: "Enter your email" },
    { path: "/register/profile", label: "Setting up a profile" },
    { path: "/register/privacy", label: "Privacy Settings" },
  ];

  return (
    <div className={styles["auth-sidebar"]}>
      <div className={styles["auth-sidebar--wrapper"]}>
        <span className={styles["auth-sidebar__logo"]}>Lumo</span>
        <h1 className={styles["auth-sidebar__title"]}>Get started with Us</h1>
        <p className={styles["auth-sidebar__description"]}>
          Complete these easy steps to register your account
        </p>

        <ul className={styles["auth-sidebar__steps"]}>
          {steps.map((step, index) => {
            const isActive = pathname === step.path;
            return (
              <li
                key={step.path}
                className={`${styles["auth-sidebar__step"]} ${
                  isActive ? styles["auth-sidebar__step--active"] : ""
                }`}
              >
                <span>{index + 1}</span> {step.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
