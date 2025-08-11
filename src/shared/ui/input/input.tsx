import styles from "./input.module.scss";

interface InputProp {
  title: string;
  type: string;
  placeholder?: string;
}

export const Input = ({ title, type = "text", placeholder }: InputProp) => {
  return (
    <div className={styles["input"]}>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <input type={type} placeholder={placeholder} id={title.toLowerCase()} />
      {type == "password" && (
        <span className={styles["input__hint"]}>
          Must be at least 8 characters
        </span>
      )}
    </div>
  );
};
