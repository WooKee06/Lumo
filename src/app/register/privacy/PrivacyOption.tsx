import styles from "../register.module.scss";

type Props = {
  selected: boolean;
  onClick: () => void;
  label?: string;
  online?: boolean;
};

export default function PrivacyOption({
  selected,
  onClick,
  label = "",
  online = true,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`${styles["privacy-card"]} ${
        selected ? styles["privacy-card--selected"] : ""
      }`}
    >
      <div className={styles["privacy-card__avatar"]}>
        <div className={styles["privacy-card__avatar-image"]}></div>
      </div>
      {label && <span className={styles["privacy-card__label"]}>{label}</span>}
    </div>
  );
}
