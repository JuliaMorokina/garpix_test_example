import React from "react";

import styles from "./styles/input.module.scss";

const Input = ({
  label = "",
  onInput = () => {},
  type = "text",
  value = "",
  ...props
}) => {
  return (
    <label className={styles["label"]}>
      <span>{label}</span>
      <input
        className={styles["input"]}
        type={type}
        onInput={onInput}
        value={value}
        {...props}
      />
    </label>
  );
};

export default Input;
