import React from "react";
import Header from "../Header";

const Layout = ({ children = null }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
