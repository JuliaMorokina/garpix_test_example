import React from "react";

import styles from "./styles/checkbox.module.scss";

const Checkbox = ({
  label = "",
  onChange = () => {},
  checked = false,
  value = "",
}) => {
  return (
    <label className={styles["label"]}>
      <span>{label}</span>
      <input
        className={styles["checkbox"]}
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </label>
  );
};

export default Checkbox;
