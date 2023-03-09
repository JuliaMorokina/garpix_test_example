import React from "react";
import classNames from "classnames";

import styles from "./styles/button.module.scss";

const Button = ({
  children = null, // image or element
  label = "",
  onClick = () => {},
  type = "button",
  variant = "", // для различных вариантов стилизации, например: bordered, icon, ...
}) => {
  const buttonClasses = classNames({
    [styles["button"]]: true,
    [styles[`_${variant}`]]: variant,
  });

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
      {label}
    </button>
  );
};

export default Button;
