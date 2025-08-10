"use client";

import React, { useState } from "react";
import PrivacyOption from "@/widgets/PrivacyOption/PrivacyOption";
import styles from "./PrivacySettings.module.scss";
import Link from "next/link";

export default function PrivacySettings() {
  const [statusVisible, setStatusVisible] = useState<boolean>(true);
  return (
    <div className={styles["profile-step"]}>
      <h2 className={styles["profile-step__title"]}>Privacy Settings</h2>
      <p className={styles["profile-step__description"]}>
        Set up who can see your profile, status, and send messages.
      </p>

      <div className={styles["privacy"]}>
        <PrivacyOption
          selected={statusVisible}
          onClick={() => setStatusVisible(true)}
          label="Public profile"
          online={true}
        />
        <PrivacyOption
          selected={!statusVisible}
          onClick={() => setStatusVisible(false)}
          label="Private profile"
          online={false}
        />
      </div>

      <div className={styles["profile-card"]}>
        <div className={styles["profile-card__avatar"]}>
          <div className={styles["profile-card__avatar-image"]}></div>
          <div
            className={`${styles["profile-card__status"]} ${
              statusVisible
                ? styles["privacy-card__status--online"]
                : styles["privacy-card__status--offline"]
            }`}
          />
        </div>
        <div className={styles["profile-card__info"]}>
          <h3 className={styles["profile-card__name"]}>Your NickName </h3>
          <p className={styles["profile-card__description"]}>
            This is your public profile. People will see your name, status, and
            avatar.
          </p>
          <p>
            Current status:{" "}
            <span>{statusVisible ? "Online" : "Offline / Private"}</span>
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Link href="/" className={styles["profile-step__next-button"]}>
          Sing Up
        </Link>
      </div>
    </div>
  );
}
