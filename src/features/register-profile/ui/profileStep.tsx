import React from "react";
import styles from "./profileStep.module.scss";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function ProfileStep() {
  return (
    <div className={styles["profile-step"]}>
      <h2 className={styles["profile-step__title"]}>
        Personalize your profile
      </h2>

      <div className={styles["profile-step__avatar-wrapper"]}>
        <input
          type="file"
          id="avatarInput"
          accept="image/*"
          className={styles["profile-step__avatar-input"]}
        />
        <label
          htmlFor="avatarInput"
          className={styles["profile-step__avatar-placeholder"]}
        >
          <span>+</span>
        </label>
        <button
          type="button"
          className={styles["profile-step__generate-avatar"]}
          onClick={() => alert("Avatar generator not implemented yet")}
        >
          Generate Avatar
        </button>
      </div>

      <form className={styles["profile-step__form"]}>
        <Input title="Full Name" type="text" placeholder="Your name " />
        <Input title="Date of Birth" type="date" />
        <Input title="Custom Status" type="text" placeholder="developer" />
        <Input title="Website" type="url" placeholder="https://your-site.com" />
        <Input
          title="Interests"
          type="text"
          placeholder="Coding, Art, Gaming"
        />
        <Input title="Location" type="text" placeholder="Derbent" />

        <div className="flex gap-2 ">
          <button type="button" className={styles["profile-step__next-button"]}>
            Back
          </button>
          <Link
            href="/register/privacy"
            className={styles["profile-step__next-button"]}
          >
            Next Step
          </Link>
        </div>
      </form>
    </div>
  );
}
