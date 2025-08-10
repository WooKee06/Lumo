"use client";
import styles from "../register.module.scss";
import { useRouter } from "next/navigation";

export default function StepTwo() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleFinish = () => {
    router.push("/register/privacy");
  };

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
        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Your full name" />
          </div>
        </div>

        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" type="date" />
          </div>
        </div>

        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="status">Custom Status</label>
            <input
              id="status"
              type="text"
              placeholder="e.g., Coffee lover ☕"
            />
          </div>
        </div>

        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="url"
              placeholder="https://your-site.com"
            />
          </div>
        </div>

        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="interests">Interests</label>
            <input
              id="interests"
              type="text"
              placeholder="e.g., Coding, Art, Gaming"
            />
          </div>
        </div>

        <div className={styles["profile-step__input-group"]}>
          <div className={styles["profile-step__input"]}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="e.g., Berlin, Germany"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={handleBack}
            className={styles["profile-step__next-button"]}
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleFinish}
            className={styles["profile-step__next-button"]}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
