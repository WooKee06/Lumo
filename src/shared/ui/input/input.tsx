import styles from "./input.module.scss";

interface InputProp {
  title: string;
  type: string;
}

export const Input = ({ title, type = "text" }: InputProp) => {
  return (
    <div className={styles["input"]}>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <input type={type} id={title.toLowerCase()} />
      {type == "password" && (
        <span className={styles["input__hint"]}>
          Must be at least 8 characters
        </span>
      )}
    </div>
  );
};
