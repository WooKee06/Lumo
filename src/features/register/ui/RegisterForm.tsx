import Link from "next/link";
import styles from "./RegisterForm.module.scss";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { GoogleSvg } from "@/shared/assets/icons/GoogleSvg";
import { GithubSvg } from "@/shared/assets/icons/GithuhbSvg";

export default function RegisterForm() {
  return (
    <div className={styles["sign-up-step"]}>
      <h2 className={styles["sign-up-step__title"]}>Sign Up Account</h2>
      <p className={styles["sign-up-step__description"]}>
        Enter your personal data to create your account
      </p>

      <div className={styles["sign-up-step__providers"]}>
        <button className={styles["sign-up-step__provider-button"]}>
          <GoogleSvg />
          Google
        </button>
        <button className={styles["sign-up-step__provider-button"]}>
          <GithubSvg />
          GitHub
        </button>
      </div>

      <div className={styles["sign-up-step__or-line"]}>
        <hr />
        <span>or</span>
        <hr />
      </div>

      <form className={styles["sign-up-step__form"]}>
        <div className={styles["sign-up-step__input-group"]}>
          <Input title={"First name"} type="text" />
          <Input title={"Last name"} type="text" />
        </div>

        <Input title={"Email"} type="email" />

        <Input title={"Password"} type="password" />
      </form>

      <Button pathname="/register/profile">Next Step</Button>

      <p className={styles["sign-up-step__footer"]}>
        Already have an account?{" "}
        <Link href="/log-in" className={styles["sign-up-step__link"]}>
          Log in
        </Link>
      </p>
    </div>
  );
}
