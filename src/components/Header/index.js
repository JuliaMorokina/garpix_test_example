import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./styles/header.module.scss";

const Header = () => {
  const getClassName = (isActive) => {
    return classNames({
      [styles["link_active"]]: isActive,
      [styles["link"]]: true,
    });
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/clissifier" className={getClassName}>
              link 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">link 2</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
