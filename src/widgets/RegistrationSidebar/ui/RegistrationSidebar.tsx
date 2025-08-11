import React from "react";
import styles from "./RegistrationSidebar.module.scss";
import { usePathname } from "next/navigation";

interface step {
  path: string;
  label: string;
}

interface RegistrationSidebarProp {
  steps: step[];
}

const RegistrationSidebar = ({ steps }: RegistrationSidebarProp) => {
  const pathname = usePathname();

  return (
    <ul className={styles["steps"]}>
      {steps.map((step, index) => {
        const isActive = pathname === step.path;
        return (
          <li
            key={step.path}
            className={`${styles["step"]} ${
              isActive ? styles["step--active"] : ""
            }`}
          >
            <span>{index + 1}</span> {step.label}
          </li>
        );
      })}
    </ul>
  );
};

export default RegistrationSidebar;
