"use client";
import { useRouter } from "next/navigation";
import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  pathname?: string;
  onClick?: () => void;
}

export const Button = ({ children, pathname, onClick }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (pathname) {
      router.push(pathname);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
